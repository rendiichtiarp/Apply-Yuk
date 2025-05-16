import { NextResponse } from 'next/server'
import { executeQuery } from '@/lib/db'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    if (!id) {
      return NextResponse.json(
        { error: 'CV ID is required' },
        { status: 400 }
      )
    }

    const query = `
      SELECT cv_data
      FROM shared_cvs
      WHERE id = ?
    `
    const results = await executeQuery({
      query,
      values: [id]
    }) as any[]

    if (!results || results.length === 0) {
      return NextResponse.json(
        { error: 'CV not found' },
        { status: 404 }
      )
    }

    const cvData = results[0].cv_data
    if (!cvData) {
      return NextResponse.json(
        { error: 'CV data is empty' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      cv_data: typeof cvData === 'string' ? cvData : JSON.stringify(cvData)
    })
  } catch (error) {
    console.error('Get Shared CV Error:', error)
    return NextResponse.json(
      { error: 'Failed to get shared CV' },
      { status: 500 }
    )
  }
} 