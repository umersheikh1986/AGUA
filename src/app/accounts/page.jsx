"use client";
import Breadcrumb from "../../components/breadcrump/Breadcrump";
import TableOne from "../../components/tables/Tableone";
import TableThree from "../../components/tables/Tablethree";
import TableTwo from "../../components/tables/Tabletwo";
import { useState, useEffect } from "react";
import DefaultLayout from "../../components/maincomp/DefaultLayout";

const TablesPage = () => {
  const [visibleTable, setVisibleTable] = useState('tableOne'); // Default to TableOne

  useEffect(() => {
    setVisibleTable('tableOne');
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Accounts" />

      {/* Buttons with Conditional Styling */}
      <button
        className={`px-4 py-2 rounded ${
          visibleTable === 'tableOne' ? 'bg-customGray text-white' : 'bg-lightGray text-black'
        } hover:bg-customGray hover:text-white`}
        onClick={() => setVisibleTable('tableOne')}
      >
        Pending Orders
      </button>

      <button
        className={`ml-4 px-4 py-2 rounded ${
          visibleTable === 'tableTwo' ? 'bg-customGray text-white' : 'bg-lightGray text-black'
        } hover:bg-customGray hover:text-white`}
        onClick={() => setVisibleTable('tableTwo')}
      >
        Black Listed
      </button>

      <button
        className={`ml-4 px-4 py-2 rounded ${
          visibleTable === 'tableThree' ? 'bg-customGray text-white' : 'bg-lightGray text-black'
        } hover:bg-customGray hover:text-white`}
        onClick={() => setVisibleTable('tableThree')}
      >
        Users
      </button>

      {/* Tables */}
      <div className="flex flex-col gap-10">
        {visibleTable === 'tableOne' && <TableOne />}
        {visibleTable === 'tableTwo' && <TableTwo />}
        {visibleTable === 'tableThree' && <TableThree />}
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
