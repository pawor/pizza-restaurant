import styles from '../../styles/Order.module.css'
import Image from 'next/image'

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <span className={styles.id}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.name}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.address}>${product.price}</span>
                </td>
                <td>
                  <span className={styles.total}>${product.price * product.quantity}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div className={styles.row}></div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          <button 
            className={styles.button}
            disabled
          >
            PAID
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order