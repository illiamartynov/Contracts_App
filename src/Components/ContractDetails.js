import React from "react";
import { observer } from "mobx-react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Button,
} from "@mui/material";
import { formatNumberWithSpaces } from "../Utils/formatters";

const ContractDetails = observer(({ store }) => {
  const contract = store.selectedContract;

  if (!contract) return null;

  const handleClose = () => {
    store.closeDetails();
  };

  return (
    <Dialog open={!!contract} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Contract Details
        <Button
          onClick={handleClose}
          style={{ float: "right", color: "black" }}
        >
          &#x2715;
        </Button>
      </DialogTitle>
      <DialogContent>
        <h2>Основная информация</h2>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Номер договора</TableCell>
              <TableCell>{contract.number}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Дата подписания договора</TableCell>
              <TableCell>{contract.signingDate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Наименование клиента </TableCell>
              <TableCell>{contract.clientName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Краткое содержание договора</TableCell>
              <TableCell>{contract.summary}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Имя менеджера</TableCell>
              <TableCell>{contract.manager}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Площадь в</TableCell>
              <TableCell>{contract.area}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Статус договора</TableCell>
              <TableCell>{contract.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Сумма без НДС</TableCell>
              <TableCell>
                {formatNumberWithSpaces(contract.amountWithoutNDS)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>План по расходам</TableCell>
              <TableCell>{contract.expensesPlan}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Имя исполнителя</TableCell>
              <TableCell>{contract.executor}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Дата выполнения</TableCell>
              <TableCell>{contract.executionDate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Список документов</TableCell>
              <TableCell>
                {contract.documents.map((document, index) => (
                  <div key={index}>
                    <a href={document.url}>{document.name}</a>
                  </div>
                ))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h2>Платежи</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Сумма</TableCell>
              <TableCell>Дата</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contract.payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h2>Расходы</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Категория</TableCell>
              <TableCell>Сумма</TableCell>
              <TableCell>Дата</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contract.expenses.map((expense, index) => (
              <TableRow key={index}>
                <TableCell>{expense.category}</TableCell>
                <TableCell>{expense.amount}</TableCell>
                <TableCell>{expense.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
});

export default ContractDetails;
