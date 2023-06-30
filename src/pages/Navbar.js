import styles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
      <div className={styles.nav}>
        <div className={styles.nameContainer}>
       <span className={styles.appName}>eCommerce</span> 
       <span className={styles.prodList}><a className={styles.prodLink} href='/products'>Products</a></span>
       <span className={styles.addProd}> <a className={styles.prodLink} href='/add'> Add a product <img  className={styles.addIcon} src='https://cdn-icons-png.flaticon.com/256/4315/4315609.png' alt='add-pic'/> </a></span>
       </div>
        <div className={styles.userContainer}>
          <span className={styles.name}>Niranjan</span>
          <img className={styles.profilePic} src="https://cdn2.iconfinder.com/data/icons/business-man-8/512/7-1024.png" alt="profile-pic" />
        </div>
      </div>
    );
  }
  
  
  export default Navbar;