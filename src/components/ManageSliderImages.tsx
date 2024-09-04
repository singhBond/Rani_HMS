"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SliderImage = {
  url: string;
};

type ManageSliderImagesProps = {
  userImages: SliderImage[];
  onUpdateImages: (images: SliderImage[]) => void;
};

const ManageSliderImages: React.FC<ManageSliderImagesProps> = ({ userImages = [], onUpdateImages }) => {
  const [images, setImages] = useState<SliderImage[]>(userImages.length > 0 ? userImages : [
    { url: "/sliderImage/2.png" },
    { url: "/sliderImage/5.png" },
    { url: "/sliderImage/award.png" },
    { url: "/sliderImage/buildingcopy1.png" },
    { url: "/sliderImage/accreditations1.png" },
    { url: "/sliderImage/hmsLogo.png"},
    { url: "/sliderImage/sliderdoctor.png" },
  ]);
  
  const [newImageUrl, setNewImageUrl] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddImage = () => {
    if (newImageUrl.trim() !== "") {
      if (editIndex !== null) {
        const updatedImages = [...images];
        updatedImages[editIndex] = { url: newImageUrl };
        setImages(updatedImages);
        setEditIndex(null);
      } else {
        setImages([...images, { url: newImageUrl }]);
      }
      setNewImageUrl("");
    }
  };

  const handleEditImage = (index: number) => {
    setNewImageUrl(images[index].url);
    setEditIndex(index);
  };

  const handleDeleteImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const handleSaveChanges = () => {
    onUpdateImages(images);
  };

  return (
    <div>
      <div className="mb-4 flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Enter image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleAddImage} className="bg-destructive">
          {editIndex !== null ? "Edit Image" : "Add Image"}
        </Button>
      </div>

      <div className="image-list">
        {images.map((image, index) => (
          <div key={index} className="image-item flex items-center space-x-2 mb-2">
            <img src={image.url} alt={`Image ${index + 1}`} className="w-20 h-20 object-cover" />
            <Button onClick={() => handleEditImage(index)} className="bg-primary">
              Edit
            </Button>
            <Button onClick={() => handleDeleteImage(index)} className="bg-destructive">
              Delete
            </Button>
          </div>
        ))}
      </div>

      <Button onClick={handleSaveChanges} className="bg-primary mt-4">
        Save Changes
      </Button>
    </div>
  );
};

export default ManageSliderImages;
