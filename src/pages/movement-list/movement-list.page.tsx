import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { MovementVm } from "./movement-list.vm";

const MovementList: MovementVm[] = [
  {
    id: "1",
    description: "Nómina noviembre",
    amount: 900,
    balance: 1490,
    transaction: "2019-12-09T21:30:00",
    realTransaction: "2019-12-09T21:30:00",
    accountId: "1"
  },
  {
    id: "2",
    description: "Alquiler noviembre",
    amount: -400,
    balance: 590,
    transaction: "2019-12-07T11:30:00",
    realTransaction: "2019-12-08T20:00:10",
    accountId: "1"
  },
  {
    id: "3",
    description: "Gastos móvil",
    amount: -24,
    balance: 990,
    transaction: "2019-12-01T07:01:00",
    realTransaction: "2019-12-02T12:00:10",
    accountId: "1"
  },
  {
    id: "4",
    description: "Luz diciembre",
    amount: -110,
    balance: 2480,
    transaction: "2020-01-02T10:00:00",
    realTransaction: "2020-01-03T10:00:00",
    accountId: "2"
  },
];

export const MovementListPage: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.moneyContainer}>
            <p className={classes.caption}>SALDO DISPONIBLE</p>
            <p className={classes.money}>1490€</p>
          </div>
        </div>
        <MovementListTableComponent MovementList={MovementList} />
      </div>
    </AppLayout>
  );
};
