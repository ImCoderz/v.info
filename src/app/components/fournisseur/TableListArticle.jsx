"use client"
import React,{useEffect} from "react";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
import {EyeIcon} from "./EyeIcon";
import Link from "next/link"
import Select from "react-select";

import axios from "../../../axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Tooltip,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Spinner,
} from "@nextui-org/react";
import {PlusIcon} from "./PlusIcon";
import {VerticalDotsIcon} from "./VerticalDotsIcon";
import {SearchIcon} from "./SearchIcon";
import {ChevronDownIcon} from "./ChevronDownIcon";
import {columns} from "./dataArticleChoosen";
import {capitalize} from "./utils";

// const statusColorMap = {
//   active: "success",
//   paused: "danger",
//   vacation: "warning",
// };

const INITIAL_VISIBLE_COLUMNS = ["REF_ART","ARTICLE","COLISAGE", "Nbcarton","Qte","Pachat","R%","Mt_HT","TVA2","Gratuit","Qte_rest","actions"];

export default function TableFournisseur() {

  const deleteArticle=(id)=>{
    setUsers((prev)=>prev.map((article)=>(
      article.REF_ART!=id&&(article)
    )))
  }

  const [statusOptions, setStatusOptions] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedOptions, setSelectedOptions] = React.useState();
  const [article, setArticle] = React.useState();
  const [articles, setArticles] = React.useState();
  const [changed, setChanged] = React.useState();

  React.useEffect(()=>{
    const getArticles=async()=>{
      const res =await axios.get("/article")
      setArticles(res.data)
      setArticle(res.data?.map((article)=>(
        { value: article.REF_ART, label: article.ARTICLE }
      )))
      setIsLoading(false)
      console.log(article);
    }
    getArticles()
  },[changed])

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  function addToTable(){
    console.log(selectedOptions);
    const choosenArticles = articles.filter((article) =>
        Array.from([selectedOptions]?.map((selected)=>selected.value))?.includes(article.REF_ART)
    ).map((article)=>(
      {"REF_ART":article.REF_ART,"ARTICLE":article.ARTICLE,"COLISAGE":article.COLISAGE,"Nbcarton":nbcarton,"Qte":nbcarton*article.COLISAGE,"Pachat":pachat,"R%":remise,"Mt_HT":(pachat-(pachat*remise)/100)*nbcarton*article.COLISAGE,"TVA2":article.TVA2,"Gratuit":0,"Qte_rest":qte}
    ));
    
    
    console.log(choosenArticles)
    setUsers((prev)=>[...prev,...choosenArticles])
    console.log(users);

  }
  function editInTable(){
    console.log(Array.from(selectedKeys)[0])
    setUsers((prev)=>prev.map((article)=>(
      article.REF_ART==Array.from(selectedKeys)[0]?{"REF_ART":article.REF_ART,"ARTICLE":article.ARTICLE,"COLISAGE":article.COLISAGE,"Nbcarton":nbcarton,"Qte":nbcarton*article.COLISAGE,"Pachat":pachat,"R%":remise,"Mt_HT":(pachat-(pachat*remise)/100)*nbcarton*article.COLISAGE,"TVA2":article.TVA2,"Gratuit":0,"Qte_rest":qte}:article
    )))
  }


  const [nbcarton, setNbcarton] = React.useState(0);
  const [qte, setQte] = React.useState(0);
  const [pachat, setPachat] = React.useState(0);
  const [remise, setRemise] = React.useState(0);

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(users?.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.FOURNISSEUR.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.ENTROPOT),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    console.log(cellValue);

    switch (columnKey) {
      case "FOURNISSEUR":
        return (
          <User
            avatarProps={{radius: "lg", src: "https://i.pravatar.cc/150?u=a042581f4e29026704d"}}
            description={user.ARTICLE}
            name={cellValue}
          >
            {user.E_MAIL}
          </User>
        );
      case "ENTROPOT":
        return (
          <User
            avatarProps={{radius: "lg", src: "https://i.pravatar.cc/150?u=a042581f4e29026704d"}}
            description={user.E_MAIL}
            name={cellValue}
          >
            {user.E_MAIL}
          </User>
        );
      case "REF_BC":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">{user.REF_BC}</p>
          </div>
        );
    //   case "status":
    //     return (
    //       <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
    //         {cellValue}
    //       </Chip>
    //     );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <Link href={`/commande/details/${user.REF_BC}`}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Link>
            </Tooltip>
            <Tooltip content="Edit commande">
              <Link href={`/commande/edit/${user.REF_BC}`}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Link>
            </Tooltip>
            <Tooltip color="danger" content="Delete commande" >
              <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={()=>deleteArticle(user?.REF_ART)}>
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  
  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = 
          (<div className="flex flex-col gap-4"><div className="flex justify-between w-full gap-6">
        <div className="w-full">
          <h2>Choose your Article</h2>
          <div className="dropdown-container">
            <Select
              options={article}
              placeholder="Select article"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
            />
          </div>
        </div>
        <div className="w-full">
          <h2>Choose your Fournisseur</h2>
          <div className="dropdown-container">
            <Select
              options={article}
              placeholder="Select article"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
            />
          </div>
        </div>
        <div className="w-full">
          <h2>Choose your Boutique</h2>
          <div className="dropdown-container">
            <Select
              options={article}
              placeholder="Select article"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
            />
          </div>
        </div>
    </div>
    <div className="flex gap-6 justify-between">
      <Input  label="Nb Carton" value={nbcarton} onValueChange={setNbcarton} placeholder="Enter your Nb Carton" type="number"  />
      <Input  label="Qte" value={qte} onValueChange={setQte} placeholder="Enter your qte" type="number"  />
    </div>
    <div className="flex gap-6 justify-between">
      <Input  label="Pachat" value={pachat} onValueChange={setPachat} placeholder="Enter your pachat" type="number"  />
      <Input  label="Remise" value={remise} onValueChange={setRemise} placeholder="Enter your remise" type="number"  />
    </div>
    <div className="flex w-full gap-6">
      <Button onClick={addToTable}>Add</Button>
      <Button onClick={editInTable}>Edit</Button>
    </div>
    </div>)

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={hasSearchFilter} size="sm" variant="flat" onPress={onPreviousPage}>
            Previous
          </Button>
          <Button isDisabled={hasSearchFilter} size="sm" variant="flat" onPress={onNextPage}>
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <>
    <ToastContainer />
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      selectedKeys={selectedKeys}
      selectionMode="single"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody isLoading={isLoading} emptyContent={isLoading?<Spinner size="lg" />:"No commandes found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item?.REF_ART}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </>
  );
}
