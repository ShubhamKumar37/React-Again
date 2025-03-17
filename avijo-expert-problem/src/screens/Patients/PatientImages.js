import React from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Uploader from "../../components/Uploader";
import { Button } from "../../components/Form";

function PatientImages() {
  const [image, setImage] = React.useState(null);
  return (
    <div className='flex-colo gap-8'>
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div className='relative w-full'>
            <img
              src={`https://placehold.it/300x300?text=${i}`}
              alt='patient'
              className='h-72 w-full rounded-lg object-cover'
            />
            <button
              onClick={() => toast.error("This feature is not available yet.")}
              className='flex-colo absolute -right-1 -top-1 h-8 w-8 rounded-full bg-white'
            >
              <FaTimes className='text-red-500' />
            </button>
          </div>
        ))}
      </div>
      <Uploader setImage={setImage} />
      <Button
        onClick={() => toast.error("This feature is not available yet.")}
        label='Save Changes'
        Icon={null}
      />
    </div>
  );
}

export default PatientImages;
