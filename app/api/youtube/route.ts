import { NextResponse } from 'next/server'

const API_KEY = process.env.YOUTUBE_API_KEY
const CHANNEL_HANDLE = 'acheiverskiduniya5891'

export async function GET() {
  try {
    if (!API_KEY) {
      return NextResponse.json(
        { error: 'YouTube API key not configured' },
        { status: 500 }
      )
    }

    // Step 1: Resolve channel handle to channel ID
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${CHANNEL_HANDLE}&key=${API_KEY}`
    )

    if (!searchResponse.ok) {
      throw new Error('Failed to fetch channel data')
    }

    const searchData = await searchResponse.json()
    
    if (!searchData.items || searchData.items.length === 0) {
      return NextResponse.json(
        { error: 'Channel not found' },
        { status: 404 }
      )
    }

    const channelId = searchData.items[0].id.channelId

    // Step 2: Fetch channel statistics
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${channelId}&key=${API_KEY}`
    )

    if (!channelResponse.ok) {
      throw new Error('Failed to fetch channel statistics')
    }

    const channelData = await channelResponse.json()
    const channelInfo = channelData.items[0]

    // Step 3: Fetch latest videos
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=6&order=date&type=video&key=${API_KEY}`
    )

    if (!videosResponse.ok) {
      throw new Error('Failed to fetch videos')
    }

    const videosData = await videosResponse.json()

    // Format response
    const response = {
      channel: {
        id: channelId,
        title: channelInfo.snippet.title,
        description: channelInfo.snippet.description,
        thumbnail: channelInfo.snippet.thumbnails.high.url,
        subscriberCount: channelInfo.statistics.subscriberCount,
        videoCount: channelInfo.statistics.videoCount,
        viewCount: channelInfo.statistics.viewCount,
      },
      videos: videosData.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt,
        channelTitle: item.snippet.channelTitle,
      })),
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('YouTube API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch YouTube data' },
      { status: 500 }
    )
  }
}
