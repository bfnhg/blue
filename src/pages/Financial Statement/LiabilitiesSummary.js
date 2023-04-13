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
  Tabs,
  Descriptions,
  Card,
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
  const [liability, setliability] = useState([]);
  const [editingRowbook, setEditingRowbook] = useState(null);
  const [statementcategory, setStatementCategory] = useState([{}]);
  const onChange = (key) => {
    console.log(key);
  };
  // const [open, setOpen] = useState(false);
  var date;
  useEffect(() => {
    console.log("year" + date);
    getLiabilities();
  }, [Company.id, year]);

  const onChangeyear = (date, dateString) => {
    setliabilities();
    console.log(date, dateString);
    setYear(dateString);
  };

  const getLiabilities = async () => {
    await axios
      .get(`${JSON_API}/Liability/summaries/${Company.id}?year=${year}`)

      .then((res) => {
        console.log(res);
        setliabilities(res.data);
        console.log(liabilities);
        console.log("mmmm");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("jkjk");
  };

  const columnsBudget = [
    {
      title: <h1 style={{ textAlign: "center"  }}>GL Number</h1>,
      dataIndex: "glNumber",
      
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Category</h1>,
      dataIndex: "category",
      
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Type</h1>,
      dataIndex: "type",
     
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Year</h1>,
      dataIndex: "year",
      
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Jan</h1>,

      align: "right",
     
      render: (text, record) => {
        return record.monthlyBudgets[0];
        
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Feb </h1>,
      dataIndex: "fevrierbudget",
      align: "right",
      render: (text, record) => {
        return record.monthlyBudgets[1];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}>Mar</h1>,
      dataIndex: "Marsbudget",
      align: "right",
      render: (text, record) => {
        return record.monthlyBudgets[2];
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Apr </h1>,
      dataIndex: "avrilbudget",
      align: "right",
      render: (text, record) => {
        return record.monthlyBudgets[3];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}>May</h1>,
      
      align: "right",
      render: (text, record) => {
        return record.monthlyBudgets[4];
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> June </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyBudgets[5];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> July </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyBudgets[6];
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Aug </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyBudgets[7];
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Sept </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyBudgets[8];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Oct </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyBudgets[9];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Nov</h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyBudgets[10];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Dec </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyBudgets[11];
      },
    },

    
    {
      title: <h1 style={{ textAlign: "center" }}> Total $ </h1>,

      key: "7",
      render: (text, record) => {
        return record.budgetTotal;
      },
    },
  ];

  const columnsReals = [
    {
      title: <h1 style={{ textAlign: "center" }}>GL Number</h1>,
      dataIndex: "glNumber",
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Category</h1>,
      dataIndex: "category",
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Type</h1>,
      dataIndex: "type",
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Year</h1>,
      dataIndex: "year",
    },
    {
      title: <h1 style={{ textAlign: "center" }}>Jan</h1>,

      align: "right",

      render: (text, record) => {
        return record.monthlyReals[0];
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Feb </h1>,
      dataIndex: "fevrierbudget",
      align: "right",
      render: (text, record) => {
        return record.monthlyReals[1];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}>Mar</h1>,
      dataIndex: "Marsbudget",
      align: "right",
      render: (text, record) => {
        return record.monthlyReals[2];
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Apr </h1>,
      dataIndex: "avrilbudget",
      align: "right",
      render: (text, record) => {
        return record.monthlyReals[3];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}>May</h1>,

      align: "right",
      render: (text, record) => {
        return record.monthlyReals[4];
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> June </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyReals[5];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> July </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyReals[6];
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Aug </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyReals[7];
      },
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Sept </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyReals[8];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Oct </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyReals[9];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Nov</h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyReals[10];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Dec </h1>,

      key: "7",
      render: (text, record) => {
        return record.monthlyReals[11];
      },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Total $ </h1>,

      key: "7",
      render: (text, record) => {
        return record.realTotal;
      },
    },
  ];

  const columnsbalanceReals = [
    {
      title: <p style={{ textAlign: "center" }}>GL Number</p>,
      dataIndex: "glNumber",
      width: 100,
    },
    {
      title: <p style={{ textAlign: "center" }}>Category</p>,
      dataIndex: "category",
      width: 100,
    },
    {
      title: <p style={{ textAlign: "center" }}>Type</p>,
      dataIndex: "type",
      width: 100,
    },
    {
      title: <p style={{ textAlign: "center" }}>Year</p>,
      dataIndex: "year",
      width: 100,
    },

    {
      title: <p style={{ textAlign: "center" }}> Jan</p>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[0];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[0];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,
          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[0];
          },
        },
      ],
      // render: (text, record) => {
      //   <p style={{ textAlign: "right" }}>{record.montant}</p>;
      // },
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Feb</h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[1];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[1];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,
          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[1];
          },
        },
      ],
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Mar</h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[2];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[2];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,
          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[2];
          },
        },
      ],
    },
    {
      title: <h1 style={{ textAlign: "center" }}> Apr</h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[3];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[3];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,
          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[3];
          },
        },
      ],
    },
    {
      title: <h1 style={{ textAlign: "center" }}> May</h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[4];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[4];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,
          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[4];
          },
        },
      ],
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Jun</h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[5];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[5];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,
          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[5];
          },
        },
      ],
    },

    {
      title: <h1 style={{ textAlign: "center" }}> July</h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[6];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[6];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,
          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[6];
          },
        },
      ],
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Aug </h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[7];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[7];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,
          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[7];
          },
        },
      ],
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Sept </h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[8];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[8];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,
          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[8];
          },
        },
      ],
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Oct </h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[9];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[9];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,
          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[9];
          },
        },
      ],
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Nov </h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[10];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[10];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,

          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[10];
          },
        },
      ],
    },

    {
      title: <h1 style={{ textAlign: "center" }}> Dec </h1>,

      children: [
        {
          title: <p style={{ color: "green" }}>Budget</p>,

          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyBudgets[11];
          },
        },
        {
          title: <p style={{ color: "green" }}>Real</p>,

          aligne: "left",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyReals[11];
          },
        },
        {
          title: <p style={{ color: "green" }}>Difference</p>,

          dataIndex: "street",
          // width: 150,
          align: "right",
          render: (text, record) => {
            return record.monthlyPerformances[11];
          },
        },
      ],
    },

    // {
    //   title: <h1 style={{ textAlign: "center" }}> Février</h1>,
    //   aligne: "right",
    //   width: 120,
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "fevrierbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[1];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "fevrierbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[1]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[1];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{record.reals[1] - budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   // render: (text, record) => {
    //   //   <p style={{ textAlign: "right" }}>{record.fevrierbudget}</p>;
    //   // },
    // },

    // {
    //   title: <h1 style={{ textAlign: "center" }}> Mars</h1>,
    //   aligne: "right",
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "Marsbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[2];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "Marsbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[2]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[2];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{record.reals[2] - budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   // render: (text, record) => {
    //   //   <p style={{ textAlign: "right" }}>{record.Marsbudget}</p>;
    //   // },
    // },

    // {
    //   title: <h1 style={{ textAlign: "center" }}> Avril</h1>,
    //   aligne: "right",
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "avrilbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[3];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "avrilbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[3]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[3];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{record.reals[3] - budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   render: (text, record) => {
    //     <p style={{ textAlign: "right" }}>{record.avrilbudget}</p>;
    //   },
    // },

    // {
    //   title: <h1 style={{ textAlign: "center" }}> Mai</h1>,
    //   aligne: "right",
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "maibudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[4];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "maibudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[4]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[4];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{record.reals[4] - budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   render: (text, record) => {
    //     <p style={{ textAlign: "right" }}>{record.avrilbudget}</p>;
    //   },
    // },

    // {
    //   title: <h1 style={{ textAlign: "center" }}> Juin</h1>,
    //   aligne: "right",
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "Juinbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[5];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "Juinbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[5]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[5];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{record.reals[5] - budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   render: (text, record) => {
    //     <p style={{ textAlign: "right" }}>{record.avrilbudget}</p>;
    //   },
    // },

    // {
    //   title: <h1 style={{ textAlign: "center" }}> Juillet</h1>,
    //   aligne: "right",
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "juilletbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[6];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "juilletbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[6]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[6];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{record.reals[6] - budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   render: (text, record) => {
    //     <p style={{ textAlign: "right" }}>{record.juilletbudget}</p>;
    //   },
    // },

    // {
    //   title: <h1 style={{ textAlign: "center" }}> Août </h1>,
    //   aligne: "right",
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "aoutbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[7];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "aoutbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[7]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[7];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{record.reals[7] - budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   render: (text, record) => {
    //     <p style={{ textAlign: "right" }}>{record.aoutbudget}</p>;
    //   },
    // },

    // {
    //   title: <h1 style={{ textAlign: "center" }}> Septembre </h1>,
    //   aligne: "right",
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "septembrebudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[8];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "septembrebudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[8]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[8];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{record.reals[8] - budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   render: (text, record) => {
    //     <p style={{ textAlign: "right" }}>{record.septembrebudget}</p>;
    //   },
    // },
    // {
    //   title: <h1 style={{ textAlign: "center" }}> Octobre </h1>,
    //   aligne: "right",
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "octobrebudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[9];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "octobrebudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[9]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[9];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{record.reals[9] - budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   render: (text, record) => {
    //     <p style={{ textAlign: "right" }}>{record.octobrebudget}</p>;
    //   },
    // },

    // {
    //   title: <h1 style={{ textAlign: "center" }}> Novembre </h1>,
    //   aligne: "right",
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "novemberbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[10];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "novemberbudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[10]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[10];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>
    //               {record.reals[10] - budget}
    //             </p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   render: (text, record) => {
    //     <p style={{ textAlign: "right" }}>{record.novemberbudget}</p>;
    //   },
    // },
    // {
    //   title: <h1 style={{ textAlign: "center" }}> Décembre </h1>,
    //   aligne: "right",
    //   children: [
    //     {
    //       title: "Budget",
    //       dataIndex: "decembrebudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[11];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>{budget}</p>
    //           </>
    //         );
    //       },
    //     },
    //     {
    //       title: "Real",

    //       dataIndex: "decembrebudget",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         return <p style={{ textAlign: "right" }}>{record.reals[11]}</p>;
    //       },
    //     },
    //     {
    //       title: "Difference",

    //       dataIndex: "street",
    //       width: 150,
    //       align: "right",
    //       render: (text, record) => {
    //         let budget = 0;
    //         return (
    //           <>
    //             {props.liabilityBudgets.map((e) => {
    //               if (e.year == record.year) {
    //                 budget = e.budgets[11];
    //               }
    //             })}
    //             <p style={{ textAlign: "right" }}>
    //               {record.reals[11] - budget}
    //             </p>
    //           </>
    //         );
    //       },
    //     },
    //   ],
    //   render: (text, record) => {
    //     <p style={{ textAlign: "right" }}>{record.decembrebudget}</p>;
    //   },
    // },

    // {
    //   title: <h1 style={{ textAlign: "center" }}>Total $</h1>,
    //   width: 120,
    //   render: (text, record) => {
    //     let performance = 0;
    //     return (
    //       <>
    //         {props.liabilityPerformance.map((e) => {
    //           if (e.year == record.year) {
    //             performance = e.totalPerformance;
    //           }
    //         })}
    //         <p style={{ textAlign: "right" }}>{performance}</p>
    //       </>
    //     );
    //   },
    // },
  ];

  const items = [
    {
      key: "1",
      label: <h1 style={{ width: 300, textAlign: "center" }}>Budget</h1>,
      children: (
        <div>
          <Table
            columns={columnsBudget}
            dataSource={liabilities}
            scroll={{
              x: 1300,
            }}
            bordered
          />
        </div>
      ),
    },
    {
      key: "2",
      label: <h1 style={{ width: 300, textAlign: "center" }}>Reals</h1>,
      children: (
        <div>
          <Table
            columns={columnsReals}
            dataSource={liabilities}
            scroll={{
              x: 1300,
            }}
            bordered
          />
        </div>
      ),
    },

    {
      key: "3",
      label: <h1 style={{ width: 300, textAlign: "center" }}>Perfermonce</h1>,
      children: (
        <div>
          {" "}
          <Table
            columns={columnsbalanceReals}
            dataSource={liabilities}
            scroll={{
              x: 1300,
            }}
            bordered
          />
        </div>
      ),
    },
  ];

  return (
    <Card>
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
          <br></br>
          <br></br>

          <div
            style={{
              textAlign: "right",
            }}
          >
            <div>
              <Tabs
                style={{ marginBottom: 32, Color: "#059BFF" }}
                type="card"
                centered
                defaultActiveKey="2"
                items={items}
                onChange={onChange}

              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </Card>
  );
}

export default LiabilitiesSummary;
