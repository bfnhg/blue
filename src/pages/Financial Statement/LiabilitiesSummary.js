import React, { useMemo, useContext, useEffect, useState } from "react";
import { JSON_API } from "../../services/Constants";
import { CompanyContext } from "../../contexts/CompanyContext";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  Select,
  Button,
  DatePicker,
  Collapse,
  Popconfirm,
  Modal,
  message,
  Form,
  Checkbox,
  InputNumber,
  Input,
  Typography,
  Space,
  Row,
  Descriptions,
} from "antd";


function LiabilitiesSummary() {
  const {
    Lang,
    setLang,
    Shares,
    setShares,
    ShareHolders,
    setShareHolders,
    Product,
    setProduct,
    ActivityType,
    setActivityType,
    StrategicTarget,
    setStrategicTarget,
    BusinessPartner,
    setBusinessPartner,
    MainCustomer,
    setMainCustomer,
    RevenueModel,
    setRevenueModel,
    Companies,
    setCompanies,
    Company,
    setCompany,
    Actionstate,
    setActionstate,
    Edited,
    setEdited,
    TypeIndustries,
    setTypeIndustries,
    Market,
    setMarket,
  } = useContext(CompanyContext);
  const [year, setYear] = useState(null);
  const [liabilities, setliabilities] = useState(null);
  const [form2] = Form.useForm();
  const [editingRowbook, setEditingRowbook] = useState(null);
  const [statementcategory, setStatementCategory] = useState([{}]);
  // const [open, setOpen] = useState(false);
  var date;
  useEffect(() => {
    //date =  new Date().getFullYear();
    //if( year == null){
    //  setYear(date);
    //}
    console.log("year" + date);
    getLiabilities();
  }, [Company.id, year]);


  const onChangeyear = (date, dateString) => {
    setliabilities(null);
    console.log(date, dateString);
    setYear(dateString);
  };

  const columns = [
    {
      title: "GL Number",
      // dataIndex: "glAccountId",
      align: "center",
      render: (_, record) => (
        <div style={{ textAlign: "right" }}>
          {record.chartAccount.glAccount.glNumber}
        </div>
      ),
    },

    {
      title: "Category",
      // dataIndex: "category",
      align: "center",
      render: (_, record) => (
        <div style={{ textAlign: "left" }}>
          {record.financialStatementType.financialStatementCategory.label}
        </div>
      ),
    },

    {
      title: "Type",
      // dataIndex: "note",
      align: "center",
      render: (_, record) => (
        <div style={{ textAlign: "left" }}>{record.note}</div>
      ),
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Year</h1>,
      width: 140,
      dataIndex: "year",
      aligne: "center",
      //   key: "year",
      render: (text, record) => {
        return <p style={{ textAlign: "center" }}>{text}</p>;
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Janvier</h1>,
      dataIndex: "montant",
      //  key: "2",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[0].toFixed(2)}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 0)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Février </h1>,
      dataIndex: "fevrierbudget",
      //  key: "3",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 1)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Mars</h1>,
      dataIndex: "Marsbudget",
      key: "4",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[2]}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 2)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Avril</h1>,
      dataIndex: "avrilbudget",
      key: "5",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[3]}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 3)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Mai</h1>,
      dataIndex: "maibudget",
      key: "6",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[4]}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 4)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Juin</h1>,
      dataIndex: "Juinbudget",
      key: "7",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[5]}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 5)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Juillet</h1>,
      dataIndex: "juilletbudget",
      key: "8",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[6]}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 6)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Août</h1>,
      dataIndex: "aoutbudget",
      key: "9",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[7]}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 7)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Septembre</h1>,
      dataIndex: "septembrebudget",
      key: "10",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[8]}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 8)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Octobre</h1>,
      dataIndex: "octobrebudget",
      key: "11",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[9]}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 9)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Novembre</h1>,
      dataIndex: "novemberbudget",
      key: "12",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[10]}
            // disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 10)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Décembre</h1>,
      dataIndex: "decembrebudget",
      key: "12",
      width: 160,
      render: (text, record) => {
        return (
          <Input
            type="number"
            // value={record.budgets[11]}
            disabled={record.confirmed}
            // onChange={(e) => handleinputchange(e, record.id, 11)}
            style={{ textAlign: "right" }}
          />
        );
      },
    },
  ];
  
  const getLiabilities = async () => {
    if (year == null) {
      await axios
        .get(`${JSON_API}/Liability/filter/${Company.id}`)
        .then((res) => {
          console.log(res);
          setliabilities(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await axios
        .get(`${JSON_API}/Liability/summaries/${Company.id}?year=${year}`)
        
        .then((res) => {
          console.log(res);
          setliabilities(res.data);
          console.log(liabilities);
          console.log("flflfmfmmfmfmmf");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Liabilities for {Company.name}</h1>
      <br></br>
      <div>
        <span>
          <DatePicker
            name="year"
            picker="year"
            placeholder="Selected Year"
            style={{ width: 200, height: 35 }}
            onChange={onChangeyear}
          />
        </span>

        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button
            className="Create-button"
            type="primary"
            style={{
              textAlign: "right",
            }}
          >
            Upload the Reals
          </Button>

          <Button
            className="Create-button"
            type="primary"
            style={{
              textAlign: "right",
              marginLeft: "2rem",
            }}
            // onClick={() => setOpen(true)}
          >
            Summary
          </Button>
        </div>
      </div>
      <div>
        <Table columns={columns} dataSource={liabilities} bordered />
      </div>
    </div>
  );
}

export default LiabilitiesSummary;
