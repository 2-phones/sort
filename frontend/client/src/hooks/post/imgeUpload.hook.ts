import { useAppDispatch } from './../common/redux.hook';
import AWS from 'aws-sdk';
import React, { useEffect, useState } from 'react';
import { s3ImageUrl } from '../../redux/Slices/posts.slice';

interface FileData {
  name: string;
}

export const useS3Upload = () => {
  const [imgFilesData, setImgFiles] = useState<any>([]);
  const [previewImg, setPreviewImg] = useState<string[]>([]);
  const accessKeyId = process.env.AWS_ID;
  const secretAccessKey = process.env.AWS_SECRET_KEY;
  const Bucket = process.env.AWS_BUCKET || '';
  const Region = 'ap-northeast-2';
  const awsS3 = new AWS.S3();
  const imgpaths = '';
  const dispatch = useAppDispatch();

  AWS.config.update({
    accessKeyId,
    secretAccessKey,
  });

  const myBucket = new AWS.S3({
    params: {
      Bucket,
      Region,
    },
  });

  const handleFile = (e: any) => {
    const imgFiles = e.target.files[0];
    setImgFiles([...imgFilesData, imgFiles]);
    const preview = URL.createObjectURL(imgFiles);
    setPreviewImg([...previewImg, preview]);
    console.log(imgFilesData);
  };

  const uploadFile = async () => {
    try {
      const uploadeImgs = imgFilesData.map(async (file: any) => {
        const params = {
          ACL: 'public-read',
          Body: file,
          Bucket: Bucket,
          ContentType: file.type,
          Key: file.name,
        };
        const { Location } = await myBucket.upload(params).promise();
        return Location;
      });
      const result = await Promise.all(uploadeImgs);
      dispatch(s3ImageUrl(result));
      return result;
    } catch (err) {
      alert('파일 형식이 잘못되었습니다.');
      return;
    }

    //   const s3 = new AWS.S3();
  };
  return { handleFile, uploadFile, previewImg };
};
