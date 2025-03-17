import React from "react";
import { MenuSelect } from "./Form";
import { BiDotsHorizontalRounded, BiDotsVerticalRounded } from "react-icons/bi";
import { FiEdit, FiEye } from "react-icons/fi";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../Assets/Data";

const thclass = "text-start text-sm font-medium py-3 px-2 whitespace-nowrap";
const tdclass = "text-start text-sm py-4 px-2 whitespace-nowrap";

export function Transactiontable({ data, action, functions }) {
  const DropDown1 = [
    {
      title: "Edit",
      icon: FiEdit,
      onClick: (data) => {
        functions.edit(data.id);
      },
    },
    {
      title: "View",
      icon: FiEye,
      onClick: (data) => {
        functions.preview(data.id);
      },
    },
    {
      title: "Delete",
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error("This feature is not available yet");
      },
    },
  ];
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclass}>#</th>
          <th className={thclass}>Patient</th>
          <th className={thclass}>Date</th>
          <th className={thclass}>Status</th>
          <th className={thclass}>
            Amout <span className='text-xs font-light'>(Tsh)</span>
          </th>
          <th className={thclass}>Method</th>
          {action && <th className={thclass}>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={tdclass}>{index + 1}</td>
            <td className={tdclass}>
              <div className='flex items-center gap-4'>
                <span className='w-12'>
                  <img
                    src={item.user.image}
                    alt={item.user.title}
                    className='h-12 w-full rounded-full border border-border object-cover'
                  />
                </span>

                <div>
                  <h4 className='text-sm font-medium'>{item.user.title}</h4>
                  <p className='mt-1 text-xs text-textGray'>
                    {item.user.phone}
                  </p>
                </div>
              </div>
            </td>
            <td className={tdclass}>{item.date}</td>
            <td className={tdclass}>
              <span
                className={`px-4 py-1 ${
                  item.status === "Paid"
                    ? "bg-subMain text-subMain"
                    : item.status === "Pending"
                      ? "bg-orange-500 text-orange-500"
                      : item.status === "Cancel" && "bg-red-600 text-red-600"
                } rounded-xl bg-opacity-10 text-xs`}
              >
                {item.status}
              </span>
            </td>
            <td className={`${tdclass} font-semibold`}>{item.amount}</td>
            <td className={tdclass}>{item.method}</td>
            {action && (
              <td className={tdclass}>
                <MenuSelect datas={DropDown1} item={item}>
                  <div className='rounded-lg border bg-dry px-4 py-2 text-xl text-main'>
                    <BiDotsHorizontalRounded />
                  </div>
                </MenuSelect>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// invoice table
export function InvoiceTable({ data }) {
  const navigate = useNavigate();
  const DropDown1 = [
    {
      title: "Edit",
      icon: FiEdit,
      onClick: (item) => {
        navigate(`/invoices/edit/${item._id}`);
      },
    },
    {
      title: "View",
      icon: FiEye,
      onClick: (item) => {
        navigate(`/invoices/preview/${item._id}`);
      },
    },
    {
      title: "Delete",
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error("This feature is not available yet");
      },
    },
  ];
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclass}>Invoice ID</th>
          <th className={thclass}>Patient</th>
          <th className={thclass}>Created Date</th>
          <th className={thclass}>Due Date</th>
          <th className={thclass}>
            Amout <span className='text-xs font-light'>(Tsh)</span>
          </th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={tdclass}>#{item?.invoiceId}</td>
            <td className={tdclass}>
              <div className='flex items-center gap-4'>
                <span className='w-12'>
                  <img
                    src={item?.to?.image}
                    alt={item?.to?.title}
                    className='h-12 w-full rounded-full border border-border object-cover'
                  />
                </span>
                <div>
                  <h4 className='text-sm font-medium'>{item?.to?.title}</h4>
                  <p className='mt-1 text-xs text-textGray'>
                    {item?.to?.email}
                  </p>
                </div>
              </div>
            </td>
            <td className={tdclass}>{formatDate(item?.createdDate)}</td>
            <td className={tdclass}>{formatDate(item?.dueDate)}</td>
            <td className={`${tdclass} font-semibold`}>{item?.amount}</td>
            <td className={tdclass}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className='rounded-lg border bg-dry px-4 py-2 text-xl text-main'>
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// prescription table
export function MedicineTable({ data, onEdit }) {
  const DropDown1 = [
    {
      title: "Edit",
      icon: FiEdit,
      onClick: (item) => {
        onEdit(item);
      },
    },
    {
      title: "Delete",
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error("This feature is not available yet");
      },
    },
  ];
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclass}>Name</th>
          <th className={thclass}>
            Price <span className='text-xs font-light'>(Tsh)</span>
          </th>
          <th className={thclass}>Status</th>
          <th className={thclass}>InStock</th>
          <th className={thclass}>Measure</th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={tdclass}>
              <h4 className='text-sm font-medium'>{item?.name}</h4>
            </td>
            <td className={`${tdclass} font-semibold`}>{item?.price}</td>
            <td className={tdclass}>
              <span
                className={`text-xs font-medium ${
                  item?.status === "Out of stock"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {item?.status}
              </span>
            </td>
            <td className={tdclass}>{item?.inStock?.toString()}</td>
            <td className={tdclass}>{item?.measure}</td>
            <td className={tdclass}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className='rounded-lg border bg-dry px-4 py-2 text-xl text-main'>
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// service table
export function ServiceTable({ data, onEdit }) {
  const DropDown1 = [
    {
      title: "Edit",
      icon: FiEdit,
      onClick: (item) => {
        onEdit(item);
      },
    },
    {
      title: "Delete",
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error("This feature is not available yet");
      },
    },
  ];
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclass}>Name</th>
          <th className={thclass}>Created At</th>
          <th className={thclass}>
            Price <span className='text-xs font-light'>(Tsh)</span>
          </th>
          <th className={thclass}>Status</th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={tdclass}>
              <h4 className='text-sm font-medium'>{item?.name}</h4>
            </td>
            <td className={tdclass}>{formatDate(item?.createdDate)}</td>
            <td className={`${tdclass} font-semibold`}>{item?.price}</td>
            <td className={tdclass}>
              <span
                className={`text-xs font-medium ${
                  !item?.status ? "text-red-600" : "text-green-600"
                }`}
              >
                {!item?.status ? "Disabled" : "Enabled"}
              </span>
            </td>
            <td className={tdclass}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className='rounded-lg border bg-dry px-4 py-2 text-xl text-main'>
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// patient table
export function PatientTable({ data, functions, used }) {
  const DropDown1 = !used
    ? [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data._id);
          },
        },
        {
          title: "Delete",
          icon: RiDeleteBin6Line,
          onClick: () => {
            toast.error("This feature is not available yet");
          },
        },
      ]
    : [
        {
          title: "View",
          icon: FiEye,
          onClick: (data) => {
            functions.preview(data._id);
          },
        },
      ];
  const thclasse = "text-start text-sm font-medium py-3 px-2 whitespace-nowrap";
  const tdclasse = "text-start text-xs py-4 px-2 whitespace-nowrap";
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclasse}>#</th>
          <th className={thclasse}>Patient</th>
          <th className={thclasse}>Created At</th>
          <th className={thclasse}>Gender</th>
          {!used && (
            <>
              <th className={thclasse}>Blood Group</th>
              <th className={thclasse}>Age</th>
            </>
          )}

          <th className={thclasse}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item._id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={tdclasse}>{index + 1}</td>
            <td className={tdclasse}>
              <div className='flex items-center gap-4'>
                {!used && (
                  <span className='w-12'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='h-12 w-full rounded-full border border-border object-cover'
                    />
                  </span>
                )}
                <div>
                  <h4 className='text-sm font-medium'>{item.patient}</h4>
                  <p className='mt-1 text-xs text-textGray'>{item.phone}</p>
                </div>
              </div>
            </td>
            <td className={tdclasse}>{formatDate(item.createdAt)}</td>

            <td className={tdclasse}>
              <span
                className={`px-4 py-1 ${
                  item.gender === "Male"
                    ? "bg-subMain text-subMain"
                    : "bg-orange-500 text-orange-500"
                } rounded-xl bg-opacity-10 text-xs`}
              >
                {item.gender}
              </span>
            </td>
            {!used && (
              <>
                <td className={tdclasse}>{item.blood}</td>
                <td className={tdclasse}>{item.age}</td>
              </>
            )}

            <td className={tdclasse}>
              <MenuSelect datas={DropDown1} item={item}>
                {/* <div className="bg-dry border text-main text-xl py-2 px-4 rounded-lg"> */}
                <BiDotsVerticalRounded className='text-lg' />
                {/* </div> */}
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Facility table
export function FacilityTable({ data, functions, doctor }) {
  const DropDown1 = [
    {
      title: "View",
      icon: FiEye,
      onClick: (data) => {
        functions.preview(data);
      },
    },
    {
      title: "Delete",
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error("This feature is not available yet");
      },
    },
  ];
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclass}>#</th>
          <th className={thclass}>Name</th>
          <th className={thclass}>Invitation for:</th>
          <th className={thclass}>Facility type</th>
          <th className={thclass}>email hf id/email</th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={tdclass}>{index + 1}</td>
            <td className={tdclass}>
              <div className='flex items-center gap-4'>
                <span className='w-12'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='h-12 w-full rounded-full border border-border object-cover'
                  />
                </span>
                <h4 className='text-sm font-medium'>{item.fullName}</h4>
              </div>
            </td>
            <td className={tdclass}>{item.invitationFor}</td>
            <td className={tdclass}>
              <p className='text-textGray'>{item.businessName}</p>
            </td>
            <td className={tdclass}>{item.emailId}</td>

            <td className={tdclass}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className='rounded-lg border bg-dry px-4 py-2 text-xl text-main'>
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// doctor table
export function DoctorsTable({ data, functions, doctor }) {
  const DropDown1 = [
    {
      title: "View",
      icon: FiEye,
      onClick: (data) => {
        functions.preview(data);
      },
    },
    {
      title: "Delete",
      icon: RiDeleteBin6Line,
      onClick: () => {
        toast.error("This feature is not available yet");
      },
    },
  ];
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclass}>#</th>
          <th className={thclass}>
            {doctor ? "Doctor & Nurse" : "Receptionist"}
          </th>
          <th className={thclass}>Created At</th>
          {/* <th className={thclass}>Phone</th>  */}
          <th className={thclass}>Title</th>
          <th className={thclass}>Email</th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td classNam e={tdclass}>
              {index + 1}
            </td>
            <td className={tdclass}>
              <div className='flex items-center gap-4'>
                <span className='w-12'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='h-12 w-full rounded-full border border-border object-cover'
                  />
                </span>
                <h4 className='text-sm font-medium'>{item.fullName}</h4>
              </div>
            </td>
            <td className={tdclass}>12 May, 2021</td>
            {/* <td className={tdclass}>
              <p className="text-textGray">{item.phone}</p>
            </td> */}
            <td className={tdclass}>{item.title}</td>
            <td className={tdclass}>{item.emailId}</td>

            <td className={tdclass}>
              <MenuSelect datas={DropDown1} item={item}>
                <div className='rounded-lg border bg-dry px-4 py-2 text-xl text-main'>
                  <BiDotsHorizontalRounded />
                </div>
              </MenuSelect>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// appointment table
export function AppointmentTable({ data, functions, doctor }) {
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclass}>Date</th>
          <th className={thclass}>{doctor ? "Patient" : "Doctor"}</th>
          <th className={thclass}>Status</th>
          <th className={thclass}>Time</th>
          <th className={thclass}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr
            key={item.id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={tdclass}>
              <p className='text-xs'>{formatDate(item.createdAt)}</p>
            </td>
            <td className={tdclass}>
              <h4 className='text-xs font-medium'>
                {item.userName}
                {/* {doctor ? item.user.userName : item.doctor.userName} */}
              </h4>
              <p className='mt-1 text-xs text-textGray'>
                {item?.phone}
                {/* {doctor ? item.user.phone : item.doctor.phone} */}
              </p>
            </td>
            <td className={tdclass}>
              <span
                className={`px-4 py-1 ${
                  item.status === "Approved"
                    ? "bg-subMain text-subMain"
                    : item.status === "Pending"
                      ? "bg-orange-500 text-orange-500"
                      : item.status === "Cancel" && "bg-red-600 text-red-600"
                } rounded-xl bg-opacity-10 text-xs`}
              >
                {item?.status}
              </span>
            </td>
            <td className={tdclass}>
              <p className='text-xs'>{item.time}</p>
              {/* <p className="text-xs">{`${item.from} - ${item.to}`}</p> */}
            </td>

            <td className={tdclass}>
              <button
                onClick={() => functions.preview(item)}
                className='flex-colo h-10 w-10 rounded-md border bg-white text-sm text-subMain'
              >
                <FiEye />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// payment table
export function PaymentTable({ data, functions, doctor }) {
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclass}>Date</th>
          <th className={thclass}>{doctor ? "Patient" : "Doctor"}</th>
          <th className={thclass}>Status</th>
          <th className={thclass}>Amount</th>
          <th className={thclass}>Method</th>
          <th className={thclass}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={tdclass}>
              <p className='text-xs'>{item.date}</p>
            </td>
            <td className={tdclass}>
              <h4 className='text-xs font-medium'>
                {doctor ? item.user.title : item.doctor.title}
              </h4>
              <p className='mt-1 text-xs text-textGray'>
                {doctor ? item.user.phone : item.doctor.phone}
              </p>
            </td>
            <td className={tdclass}>
              <span
                className={`px-4 py-1 ${
                  item.status === "Paid"
                    ? "bg-subMain text-subMain"
                    : item.status === "Pending"
                      ? "bg-orange-500 text-orange-500"
                      : item.status === "Cancel" && "bg-red-600 text-red-600"
                } rounded-xl bg-opacity-10 text-xs`}
              >
                {item.status}
              </span>
            </td>
            <td className={tdclass}>
              <p className='text-xs font-semibold'>{`$${item.amount}`}</p>
            </td>
            <td className={tdclass}>
              <p className='text-xs'>{item.method}</p>
            </td>

            <td className={tdclass}>
              <button
                onClick={() => functions.preview(item.id)}
                className='flex-colo h-10 w-10 rounded-md border bg-white text-sm text-subMain'
              >
                <FiEye />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// invoice used table
export function InvoiceUsedTable({ data, functions }) {
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclass}>Invoice ID</th>
          <th className={thclass}>Create Date</th>
          <th className={thclass}>Due Date</th>
          <th className={thclass}>Amount</th>
          <th className={thclass}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr
            key={item._id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={tdclass}>
              <p className='text-xs'>#{item.invoiceId}</p>
            </td>
            <td className={tdclass}>
              <p className='text-xs'>{formatDate(item.createdDate)}</p>
            </td>
            <td className={tdclass}>
              <p className='text-xs'>{formatDate(item?.dueDate)}</p>
            </td>
            <td className={tdclass}>
              <p className='text-xs font-semibold'>{`$${item?.subTotal}`}</p>
            </td>

            <td className={tdclass}>
              <button
                onClick={() => functions.preview(item._id)}
                className='flex-colo h-10 w-10 rounded-md border bg-white text-sm text-subMain'
              >
                <FiEye />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// invoice table
export function InvoiceProductsTable({ data, functions, button }) {
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclass}>Item</th>
          <th className={thclass}>
            Item Price
            <span className='ml-1 text-xs font-light'>(Tsh)</span>
          </th>
          <th className={thclass}>Quantity</th>
          <th className={thclass}>
            Amout
            <span className='ml-1 text-xs font-light'>(Tsh)</span>
          </th>
          {button && <th className={thclass}>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr
            key={item.id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={`${tdclass} font-medium`}>{item.itemName}</td>
            <td className={`${tdclass} text-xs`}>{item.itemPrice}</td>
            <td className={tdclass}>{item.quantity}</td>
            <td className={tdclass}>{item.itemPrice * item.quantity}</td>
            {button && (
              <td className={tdclass}>
                <button
                  onClick={() => functions.deleteItem(item._id)}
                  className='rounded-lg border border-red-100 bg-red-600 bg-opacity-5 px-4 py-3 text-sm text-red-600'
                >
                  <RiDeleteBinLine />
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// medicine Dosage table

export function MedicineDosageTable({ data, functions, button }) {
  const thclasse = "text-start text-xs font-medium py-3 px-2 whitespace-nowrap";
  const tdclasse = "text-start text-xs py-4 px-2 whitespace-nowrap";
  return (
    <table className='w-full table-auto'>
      <thead className='overflow-hidden rounded-md bg-dry'>
        <tr>
          <th className={thclasse}>Item</th>
          <th className={thclasse}>
            Item Price
            <span className='ml-1 text-xs font-light'>(Tsh)</span>
          </th>
          <th className={thclasse}>Dosage</th>
          <th className={thclasse}>Instraction</th>
          <th className={thclasse}>Quantity</th>
          <th className={thclasse}>
            Amout
            <span className='ml-1 text-xs font-light'>(Tsh)</span>
          </th>
          {button && <th className={thclasse}>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr
            key={item.id}
            className='transitions border-b border-border hover:bg-greyed'
          >
            <td className={tdclasse}>{item.name}</td>
            <td className={tdclasse}>{item.price}</td>
            <td className={tdclasse}>{item.id} - M/A/E</td>
            <td className={tdclasse}>{item.instraction}</td>
            <td className={tdclasse}>{item.id}</td>
            <td className={tdclasse}>{item.price * item.id}</td>
            {button && (
              <td className={tdclasse}>
                <button
                  onClick={() => functions.delete(item.id)}
                  className='rounded-lg border border-red-100 bg-red-600 bg-opacity-5 px-4 py-3 text-sm text-red-600'
                >
                  <RiDeleteBinLine />
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
