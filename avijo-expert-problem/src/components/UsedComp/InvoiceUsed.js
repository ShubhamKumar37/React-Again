import React, { useEffect, useState } from "react";
import { InvoiceUsedTable } from "../Tables";
import { useNavigate } from "react-router-dom";
// import { invoicesData } from '../Datas';
import { BaseUrl } from "../../Assets/Data";

function InvoiceUsed() {
  const navigate = useNavigate();
  const [invoicesData, setInvoicesData] = useState([]);

  const fetchInvoince = async () => {
    try {
      const response = await fetch(`${BaseUrl}/doctor/getAllInvoices`);
      const json = await response.json();
      console.log("invoice:", json.data);
      setInvoicesData(json.data);
    } catch (e) {
      console.log("error fetching doctor...", e);
    }
  };

  useEffect(() => {
    fetchInvoince();
  }, []);

  // preview
  const preview = (id) => {
    navigate(`/invoices/preview/${id}`);
  };
  return (
    <div className='w-full'>
      <h1 className='mb-6 text-sm font-medium'>Invoices</h1>
      <div className='w-full overflow-x-scroll'>
        <InvoiceUsedTable
          data={invoicesData}
          functions={{
            preview: preview,
          }}
        />
      </div>
    </div>
  );
}

export default InvoiceUsed;
