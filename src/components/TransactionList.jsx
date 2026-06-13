function TransactionList({
  transactions,
  deleteTransaction,
}) {
  return (
    <div>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className={`transaction ${transaction.type}`}
        >
          <span>
            {transaction.description} - €{transaction.amount} ({transaction.category})
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