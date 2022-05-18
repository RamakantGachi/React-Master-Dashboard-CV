import { React, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";
import { CSVLink } from "react-csv";
import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

export default function BasicTable({
  dummyData,
  requiredKeys,
  requiredKeysPost,
  dateFields,
  hiddenFieldLength = 2,
  title = "",
  handleSearch,
}) {
  // console.log(dummyData, requiredKeys, dateFields, hiddenFieldLength, "props");
  const [state, setState] = useState({});

  const [dates, setDates] = useState({});
  const [tableData, setTableData] = useState([]);
  const [exportTableFields, setExportField] = useState([]);
  useEffect(() => {
    setTableData([]);
    setState({});
    setDates({});
    let tempData = [];

    Object.keys(dummyData[0]).map((item) => (tempData[item] = true));
    console.log(tempData, "dummy data");
    setExportField(tempData);
  }, [title]);

  //  *******************************************************
  const handleSubmit = async () => {
    console.log(state);
    if (requiredKeys.some((item) => state[item] != "")) {
      const data = { debug: true };
      requiredKeys.forEach((element, idx) => {
        if (state[element]) {
          data[requiredKeysPost[idx]] = state[element];
        }
      });
      const response = await handleSearch(data);

      if (response) {
        console.log(response);
        setTableData(response);
      }
    }
    if (requiredKeys.every((item) => state[item] == "")) {
      // console.log(state);
      alert(`Fields ${requiredKeys} can't be empty`);
    }
  };

  const handleInputChange = (e) => {
    const inputLabel = e.target.id;
    setState((prevState) => {
      return { ...prevState, [inputLabel]: e.target.value };
    });
  };

  const handleChange = (newValue, sender) => {
    // console.log(newValue, sender, "asjghbd");
    setDates({ ...dates, [sender]: newValue });
    // setValue(newValue);
    setState((prevState) => {
      return {
        ...prevState,
        [sender]: format(new Date(newValue), "yyyy-MM-dd kk:mm:ss").toString(),
      };
    });
  };

  const getCSVData = () => {
    // console.log(dummyData);
    let csvData = [Object.keys(dummyData[0]).slice(hiddenFieldLength + 1)];
    console.log(csvData);
    let idxArray = [];
    csvData = [
      csvData[0].filter((word, idx) => {
        if (exportTableFields[word]) {
          idxArray.push(idx);
        }
        return exportTableFields[word];
      }),
    ];
    if (tableData) {
      tableData.map((entry) => {
        let tempDataValue = Object.values(entry).slice(hiddenFieldLength + 1);
        // console.log("before", idxArray);

        tempDataValue = tempDataValue.filter((word, idx) =>
          idxArray.includes(idx)
        );
        // console.log(tempDataValue, "aftewr filter");
        csvData.push(tempDataValue);
      });
    }
    return csvData;
  };

  const csvData = getCSVData();

  const handleCheck = (item) => {
    setExportField({ ...exportTableFields, [item]: !exportTableFields[item] });

    // console.log(item, exportTableFields, "items logged");
  };

  //  *******************************************************

  return (
    <div className="relative">
      <CSVLink data={csvData} filename={title + ".csv"}>
        <Button
          variant="contained"
          sx={{
            float: "right",
            marginBottom: "40px",
            backgroundColor: "#307fe2",
          }}
        >
          Export
        </Button>
      </CSVLink>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.keys(dummyData[0]).map((item, id) => {
                if (id < hiddenFieldLength) {
                  return null;
                }
                return (
                  <TableCell
                    sx={{
                      backgroundColor: "#307fe2",
                      border: 2,
                      borderColor: "lightgray",
                    }}
                    key={id}
                  >
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {Object.keys(dummyData[0]).map((item, id) => {
                if (id < hiddenFieldLength) {
                  return null;
                } else
                  return (
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        border: 2,
                        borderColor: "lightgray",
                        // minWidth: "200px",
                      }}
                      key={id}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          style={{
                            transform: "scale(1.6)",
                          }}
                          checked={exportTableFields[item]}
                          onChange={() => handleCheck(item)}
                        ></input>
                        {!dateFields.includes(item) ? (
                          <input
                            required={requiredKeys.includes(item)}
                            disabled={!requiredKeys.includes(item)}
                            onChange={(e) => {
                              // console.log(requiredKeys, item, "test log ");
                              // handleInputChange();
                            }}
                            onKeyDown={(e) => {
                              if (e.keyCode === 13) {
                                handleSubmit();
                              }
                            }}
                            id={item}
                          />
                        ) : (
                          <DatePicker
                            onChange={(date) => {
                              handleChange(date, item);
                            }}
                            // styles={{ minWidth: "100px" }}
                            key={id}
                            selected={dates[item]}
                            disabled={!requiredKeys.includes(item)}
                            onKeyDown={(e) => {
                              if (e.keyCode === 13) {
                                handleSubmit();
                              }
                            }}
                          />
                        )}
                      </div>
                    </TableCell>
                  );
              })}
            </TableRow>
            {Boolean(tableData.length) &&
              tableData.map((entry, idx) => {
                return (
                  <TableRow key={idx}>
                    {Object.values(entry).map((item, id) => {
                      if (id < hiddenFieldLength) {
                        return null;
                      }
                      return (
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            border: 2,
                            borderColor: "lightgray",
                          }}
                          key={id}
                        >
                          {item}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
