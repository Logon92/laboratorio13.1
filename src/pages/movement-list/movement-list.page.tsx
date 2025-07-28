import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { MovementVm } from "./movement-list.vm";
import { useParams } from "react-router-dom";
import { getMovements } from "./api";

const getFirstBalance = (movementsList: MovementVm[]): number | undefined => {
  return movementsList.length > 0 ? movementsList[0].balance : undefined;
};

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movementsList, setMovementsList] = React.useState<MovementVm[]>([]);

  const loadMovements = async () => {
    const movements = await getMovements(id || "");
    setMovementsList(movements);
  };

  React.useEffect(() => {
    loadMovements();
  }, [id]);

  const firstBalance = getFirstBalance(movementsList);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div className={classes.moneyContainer}>
            <p className={classes.caption}>SALDO DISPONIBLE</p>
            <p className={classes.money}>{firstBalance ?? 0}€</p>
          </div>
        </div>
        <MovementListTableComponent movementList={movementsList} />
      </div>
    </AppLayout>
  );
};