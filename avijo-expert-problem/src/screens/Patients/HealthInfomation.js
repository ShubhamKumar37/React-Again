import React from "react";
import { sortsDatas } from "../../components/Datas";
import { Button, Input, Select, Textarea } from "../../components/Form";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { toast } from "react-hot-toast";

// Health Information
// allergies
// habits
// Medical History

function HealthInfomation() {
  const [bloodType, setBloodType] = React.useState(
    sortsDatas.bloodTypeFilter[0]
  );
  return (
    <div className='flex-colo gap-4'>
      {/* uploader */}
      <div className='col-span-6 flex w-full flex-col gap-3'>
        {/* select  */}
        <div className='flex w-full flex-col gap-3'>
          <p className='text-sm text-black'>Blood Group</p>
          <Select
            selectedPerson={bloodType}
            setSelectedPerson={setBloodType}
            datas={sortsDatas.bloodTypeFilter}
          >
            <div className='flex-btn w-full rounded-lg border border-border p-4 text-sm font-light text-textGray focus:border focus:border-subMain'>
              {bloodType?.name} <BiChevronDown className='text-xl' />
            </div>
          </Select>
        </div>

        {/* weight */}
        <Input label='Weight' color={true} type='text' placeholder={"60kg"} />
        {/* height */}
        <Input label='Height' color={true} type='text' placeholder={"5.5ft"} />
        {/* allergies */}
        <Textarea
          label='Allergies'
          color={true}
          rows={3}
          placeholder={"beans, nuts, etc"}
        />
        {/* habits */}
        <Textarea
          label='Habits'
          color={true}
          rows={3}
          placeholder={"smoking, drinking, etc"}
        />
        {/* Medical History */}
        <Textarea
          label='Medical History'
          color={true}
          rows={3}
          placeholder={"diabetes,  malaria, glaucoma, etc"}
        />

        {/* submit */}
        <Button
          label={"Save Changes"}
          Icon={HiOutlineCheckCircle}
          onClick={() => {
            toast.error("This feature is not available yet");
          }}
        />
      </div>
    </div>
  );
}

export default HealthInfomation;
