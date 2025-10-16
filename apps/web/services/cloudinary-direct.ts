/**
 * Direct client-side upload to Cloudinary
 * Bypasses Vercel's 4.5MB serverless function limit
 */

export interface CloudinaryDirectUploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

/**
 * Upload a single file directly to Cloudinary from client
 */
export async function uploadFileDirectToCloudinary(
  file: File,
  folder: string = 'velgance/portfolios'
): Promise<CloudinaryDirectUploadResult> {
  try {
    // Create form data for direct upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'velgance_portfolios');
    formData.append('folder', folder);

    // Upload directly to Cloudinary
    // Note: You need to set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in your environment
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'your-cloud-name';
    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!uploadResponse.ok) {
      const errorData = await uploadResponse.json();
      throw new Error(`Upload failed: ${errorData.error?.message || 'Unknown error'}`);
    }

    const result = await uploadResponse.json();

    return {
      public_id: result.public_id,
      secure_url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes,
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload image to Cloudinary');
  }
}

/**
 * Upload multiple files directly to Cloudinary
 */
export async function uploadMultipleFilesDirectToCloudinary(
  files: File[],
  folder: string = 'velgance/portfolios'
): Promise<CloudinaryDirectUploadResult[]> {
  try {
    const uploadPromises = files.map(file => 
      uploadFileDirectToCloudinary(file, folder)
    );
    
    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error('Error uploading multiple files to Cloudinary:', error);
    throw new Error('Failed to upload images to Cloudinary');
  }
}
