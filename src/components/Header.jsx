import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
	const { state, toggleOrder, toggleMenu } = useContext(AppContext);

	return (
		<>
			<nav className={styles.Nav}>
				<img src={menu.src} alt="menu" className={styles.menu} />
				<div className={styles['navbar-left']}>
					<Link href="/" passHref={true}>
						<Image src={logo} alt="logo" className={styles['nav-logo']} />
					</Link>
					<ul>
						<li>
							<Link passHref={true} href="/">All</Link>
						</li>
						<li>
							<Link passHref={true} href="/">Clothes</Link>
						</li>
						<li>
							<Link passHref={true} href="/">Electronics</Link>
						</li>
						<li>
							<Link passHref={true} href="/">Furnitures</Link>
						</li>
						<li>
							<Link passHref={true} href="/">Toys</Link>
						</li>
						<li>
							<Link passHref={true} href="/">Others</Link>
						</li>
					</ul>
				</div>
				<div className={styles['navbar-right']}>
					<ul>
						<li className={styles['more-clickable-area'], styles['navbar-email'], styles.pointer}>
							<button  onClick={() => toggleMenu()}>
								platzi@example.com
							</button>
						</li>
						<li
							// className={styles.['navbar-shopping-cart']}
							
						>
							<button onClick={() => toggleOrder()}>
								<Image className={styles['more-clickable-area'], styles.pointer} src={shoppingCart} alt="shopping cart" />
								{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
							</button>
							
						</li>
					</ul>
				</div>
				{state.menuIsOpen && <Menu />}
			</nav>
			{state.orderIsOpen && <MyOrder />}
		</>
	);
};

export default Header;
