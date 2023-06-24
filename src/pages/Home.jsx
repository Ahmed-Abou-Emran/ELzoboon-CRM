import "./Home.css";
import React from "react";
import Sumarry from "../assets/summary-report.png";
import Funnel from "../assets/funnel.jpg";
import Expenses from "../assets/expenses.png";
import Sales from "../assets/sales.png";
import Income from "../assets/income.png";
import RECENT_ORDER_DATA from "../Data/recentOrders.json";
import dealsRecentActions from "../Data/recentActions.json";
import Spinner from "../UI/Spinner";
import { useQuery } from "@tanstack/react-query";
import { getCards } from "../services/apiCards";
import { formatDate } from "../utils/helpers";
function Home() {
  const states = ["Prospecting", "Negotiation", "Closed-Won", "Closed-Lost"];
  const {
    data: recentActions,
    isLoading: isLoadingRecentActions,
    error: errorRecentActions,
  } = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });
  console.log(recentActions);

  return (
    <div className="home">
      <div className="deals">
        <header>
          <h3>Recent Actions</h3>
        </header>

        <main>
          <div className="actions-header">
            <div className="Deal">Deal</div>
            <div className="status">Status </div>
            <div className="date">Date</div>
            <div className="assigned-to">Assigned To</div>
          </div>
          {isLoadingRecentActions && <Spinner />}
          {errorRecentActions && (
            <div className="error">Actions can not be loaded</div>
          )}
          {recentActions?.map(
            ({ deal, column_id, date, assigned_to: assignedTo }) => (
              <div className="action">
                <div className="deal">{deal}</div>
                <div className="status">{states[column_id]}</div>
                <div className="date">{formatDate(date)}</div>
                <div className="assigned-to">{assignedTo}</div>
              </div>
            )
          )}
        </main>
      </div>
      <div className="summary-reports">
        <header>
          <h3> Summary Reports</h3>
        </header>

        <main className="summary-images">
          <img src={Income} alt="summary report" />
          <img src={Sales} alt="summary report" />
          <img src={Expenses} alt="summary report" />
        </main>
        <img src={Sumarry} alt="summary report" />
        <img src={Funnel} alt="summary report" />
      </div>
      <div class="recent-orders">
        <header>
          <h3>Recent Orders</h3>
        </header>
        <main>
          <div class="orders-header">
            <div class="product-name">Product Name</div>
            <div class="product-number">Product Number</div>
            <div class="payment">Payment</div>
            <div class="status">Status</div>
            <div class="details"></div>
          </div>
          <ul>
            {RECENT_ORDER_DATA.map(
              ({
                productName,
                productNumber,
                payment,
                status,
                statusColor,
              }) => {
                return (
                  <li key={productNumber} className="order">
                    <div className="product-name">{productName}</div>
                    <div className="product-number">{productNumber}</div>
                    <div className="payment">{payment}</div>
                    <div className={`status ${statusColor}`}>{status}</div>
                    <div className="details primary">More Details</div>
                  </li>
                );
              }
            )}
          </ul>
        </main>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
