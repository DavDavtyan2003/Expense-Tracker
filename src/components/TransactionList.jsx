function TransactionList({
  transactions,
  deleteTransaction,
}) {
  return (
    <div>
      <h2>Transaction History</h2>

      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className={`transaction ${transaction.type}`}
        >
          <span>
            {transaction.description} - €{transaction.amount}
          </span>

          <button
            onClick={() => deleteTransaction(transaction.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;