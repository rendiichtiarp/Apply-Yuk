import { NextResponse } from 'next/server'
import { executeQuery } from '@/lib/db'
import { v4 as uuidv4 } from 'uuid'

// POST /api/share - Menyimpan CV dan membuat link share
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { cvData } = body
    
    if (!cvData) {
      return NextResponse.json(
        { error: 'CV data is required' },
        { status: 400 }
      )
    }

    // Generate unique ID untuk CV
    const shareId = uuidv4()

    // Set expiry date 7 hari dari sekarang
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 7)

    // Simpan CV ke database
    const query = `
      INSERT INTO shared_cvs (id, cv_data, expires_at)
      VALUES (?, ?, ?)
    `
    await executeQuery({
      query,
      values: [shareId, JSON.stringify(cvData), expiryDate]
    })

    // Return share URL
    return NextResponse.json({
      shareUrl: `${process.env.NEXT_PUBLIC_APP_URL}/share/${shareId}`,
      shareId
    })
  } catch (error) {
    console.error('Share CV Error:', error)
    return NextResponse.json(
      { error: 'Failed to share CV' },
      { status: 500 }
    )
  }
}

// GET /api/share/:id - Mengambil CV berdasarkan ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    
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

    // Log untuk debugging
    console.log('CV Data from DB:', results[0])

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