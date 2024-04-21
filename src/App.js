import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/Digital Card Website/Digital Card User Interface/Pages/Home';
import DCLogin from './Components/Digital Card Website/Digital Card User Interface/Pages/DCLogin';
import DCSignUp from './Components/Digital Card Website/Digital Card User Interface/Pages/DCSignUp';
import DemoPage from './Components/DemoPage/DemoPage';
import DarshitTraders from './Components/DemoPage/DarshitTraders';
import UserDashboard from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/UserDashboard';
import ChangePassword from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/ChangePassword';
import CompanyName from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/CompanyName';
import ThemePage from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/ThemePage';
import Information from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Information';
import Links from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Links';
import Payment from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Payment';
import Products from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Products';
import Ecommerce from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Ecommerce';
import Gallery from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Gallery';
import Theme1 from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Themes/Theme1';
import Card from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Themes/Card';
import LoadingScreen from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Themes/LoadingScreen';
import NFCCard from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Themes/NFCCard';
import { HashRouter } from "react-router-dom";
import Preview from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Preview';
import AdminLogin from './Components/Administrator/Login/AdminLogin';
import DashBoard from './Components/Administrator/Login/DashBoard';
import Compatibility from './Components/Digital Card Website/Digital Card User Interface/Components/Compatibility';
import DesignUpload from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/DesignUpload';
import Packages from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/Packages';
import PaymentConfirmation from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/PaymentConfirmation';
import HowToUse from './Components/Digital Card Website/Digital Card User Interface/Components/HowToUse';
import PartialDesignUploadPage from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/PartialDesignUploadPage';
import LoadingScreen1 from './Components/Digital Card Website/Digital Card User Interface/Pages/LoadingScreen1';
import AddressPage from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/AddressPage';
import PartialPackage from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/PartialPackage';
import PartialConfirmation from './Components/Digital Card Website/Digital Card User Interface/PaymentFlow/PartialConfirmation';
import ProductsPage from './Components/Digital Card Website/Digital Card User Interface/Components/ProductsPage';
import ProductCompoent from './Components/Digital Card Website/Digital Card User Interface/Components/ProductCompoent';
import OrderForm from './Components/Digital Card Website/Digital Card User Interface/Components/OrderForm';
import SignUp from './Components/Digital Card Website/Digital Card User Interface/ReviewTag/SignUp';
import ReviewHome from './Components/Digital Card Website/Digital Card User Interface/ReviewTag/ReviewHome';
import ReviewLoadingScreen1 from './Components/Digital Card Website/Digital Card User Interface/ReviewTag/LoadingScreen1';
import LogIn from './Components/Digital Card Website/Digital Card User Interface/ReviewTag/LogIn';
import Dashboard from './Components/Digital Card Website/Digital Card User Interface/ReviewTag/Dashboard';
import ReviewChangePassword from './Components/Digital Card Website/Digital Card User Interface/ReviewTag/UserComponents/ChangePassword';
import ReviewLoadingScreen2 from './Components/Digital Card Website/Digital Card User Interface/StandeeTag/LoadingScreen1';
import SignUp1 from './Components/Digital Card Website/Digital Card User Interface/StandeeTag/SignUp';
import LogIn1 from './Components/Digital Card Website/Digital Card User Interface/StandeeTag/LogIn';
import StandeeHome from './Components/Digital Card Website/Digital Card User Interface/StandeeTag/StandeeHome';
import HotelLinks from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/HotelLinks';
import MenuLink from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/MenuLink';
import { ParallaxProvider } from 'react-scroll-parallax';
import ImageUploaderAndCropper from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/ImageUploaderAndCropper';
import NewThemeInfo from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/NewThemeInfo';
import Home from './Components/Digital Card Website/NewUpdate/components/administrator/Home';
import Enter from './Components/Digital Card Website/NewUpdate/components/administrator/Enter';
import { SessionContext } from './Components/Services/SessionContext';
import { useState } from 'react';
import CartPage from './Components/Digital Card Website/Digital Card User Interface/Components/CartPage';
import DeliverDetails from './Components/Digital Card Website/Digital Card User Interface/Components/DeliverDetails';
import { useEffect } from 'react';
import OrderComplete from './Components/Digital Card Website/Digital Card User Interface/Components/OrderComplete';
import Chri from './Components/Administrator/Chri';
import Shop from './Components/Digital Card Website/Digital Card User Interface/Components/Shop';
import Box from './Components/Digital Card Website/MenuUpdate/administrator/Box';
import Menu from './Components/Digital Card Website/MenuUpdate/administrator/Menu';
import AddMenu from './Components/Digital Card Website/MenuUpdate/adminpannel/AddMenu';
import ViewOrder from './Components/Digital Card Website/MenuUpdate/adminpannel/ViewOrder';
import OrderDetail from './Components/Digital Card Website/MenuUpdate/adminpannel/OrderDetail';
import PrintRecipt from './Components/Digital Card Website/MenuUpdate/adminpannel/PrintRecipt';
import AllMenu from './Components/Digital Card Website/MenuUpdate/adminpannel/AllMenu';
import Form from './Components/Digital Card Website/MenuUpdate/adminpannel/Form';
import EditMenu from './Components/Digital Card Website/MenuUpdate/adminpannel/EditMenu';
import Kitchen from './Components/Digital Card Website/MenuUpdate/adminpannel/Kitchen';
import Selectqy from './Components/Digital Card Website/MenuUpdate/adminpannel/Selectqy';
import FloatingMenu from './Components/Digital Card Website/MenuUpdate/administrator/FloatingMenu';
import UploadMenuCsv from './Components/Digital Card Website/MenuUpdate/adminpannel/UploadMenuCsv';
import UploadYourLogo from './Components/Digital Card Website/MenuUpdate/adminpannel/UploadYourLogo';
import MyComponent from './Components/Digital Card Website/MenuUpdate/administrator/Button ';
import MenuDashBoard from './Components/Digital Card Website/MenuUpdate/adminpannel/MenuDashBoard';
import Invite from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Pages/Invite';
import Home1 from './Components/Digital Card Website/Digital Card User Interface/Invite/Home';
import Invitation from './Components/Digital Card Website/Digital Card User Interface/Invite/Invitation';
import Details from './Components/Digital Card Website/MenuUpdate/adminpannel/Details';
import OrderComplete1 from './Components/Digital Card Website/MenuUpdate/adminpannel/OrderComplete';
import OrderDelivered from './Components/Digital Card Website/MenuUpdate/adminpannel/OrderDelivered';
import LinkGenrator from './Components/Administrator/LinkGenrator';
import Example from './Components/Administrator/Example';
import ActivationPage from './Components/Digital Card Website/MenuUpdate/administrator/ActivationPage';
import MenuLogIn from './Components/Digital Card Website/MenuUpdate/administrator/LogIn';
import MenuSignUp from './Components/Digital Card Website/MenuUpdate/administrator/SignUp';
import InviteActivationPage from './Components/Digital Card Website/Digital Card User Interface/Invite/ActivationPage';
import InviteLogIn from './Components/Digital Card Website/Digital Card User Interface/Invite/LogIn';
import InviteSignUp from './Components/Digital Card Website/Digital Card User Interface/Invite/SignUp';
import DownloadContact from './Components/Administrator/DownloadContact';
import DownloadContact2 from './Components/Administrator/DownloadContact2';
import DownloadContact3 from './Components/Administrator/DownloadContact3';
import DownloadContact4 from './Components/Administrator/DownloadContact4';
import { SnackbarProvider } from 'notistack';
import ActivateTag from './Components/Digital Card Website/VehicleTag/ActivateTag';
import VehicleNumber from './Components/Digital Card Website/VehicleTag/VehicleNumber';
import VerifyNumber from './Components/Digital Card Website/VehicleTag/VerifyNumber';
import ScanQr from './Components/Digital Card Website/VehicleTag/ScanQr';
import { MessageSend } from './Components/Digital Card Website/VehicleTag/MessageSend';
import Register from './Components/Digital Card Website/VehicleTag/Register';
import Cong from './Components/Digital Card Website/VehicleTag/Cong';
import VehicleLogin from './Components/Digital Card Website/VehicleTag/LogIn';
import VehicleSignup from './Components/Digital Card Website/VehicleTag/SignUp';
import VehicleHome from './Components/Digital Card Website/VehicleTag/VehicleHome';
import SelfOrder from './Components/Administrator/SelfOrder';
import MasterLogin from './Components/MasterDashboard/LogIn';
import MasterDashboard from './Components/MasterDashboard/MasterDashboard';
import DoorTagHome from './Components/Digital Card Website/DoorTag/DoorTagHome';
import DoorSignup from './Components/Digital Card Website/DoorTag/SignUp';
import DoorLogin from './Components/Digital Card Website/DoorTag/LogIn';
import DoorTagRegister from './Components/Digital Card Website/DoorTag/DoorTagRegister';
import AllProducts from './Components/Digital Card Website/Digital Card User Interface/Components/AllProducts';
import CardHome from './Components/Digital Card Website/Digital Card User Interface/UserDashboard/Themes/CardHome';
import MultiSignUp from './Components/Digital Card Website/Digital Card User Interface/MultiLink.js/SignUp';
import MultiLogIn from './Components/Digital Card Website/Digital Card User Interface/MultiLink.js/LogIn';
import MultiHome from './Components/Digital Card Website/Digital Card User Interface/MultiLink.js/MultiHome';
// import { Parallax } from './Components/Digital Card Website/Digital Card User Interface/Pages/Parallax';
function App() {
	const [cart, setCart] = useState([]);


	return (

		<div>
			<SessionContext.Provider value={{ cart, setCart }}>
				<SnackbarProvider autoHideDuration={4000} variant='success' anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
					<ParallaxProvider>
						<HashRouter>
							<Routes>
								{/* DIGITAL CARD WEBSITE ROUTER START */}
								<Route element={<HomePage />} path="/home" />
								<Route element={<Home />} path="/home1" />
								<Route element={<DCLogin />} path="/digitalcardlogin" />
								<Route element={<DCSignUp />} path="/digitalcardsignup" />
								<Route element={<DemoPage />} path="/demopage" />
								<Route element={<DarshitTraders />} path="/darshittraders" />
								<Route element={<UserDashboard />} path="/userdashboard" />
								<Route element={<ChangePassword />} path="/changepassword" />
								<Route element={<CompanyName />} path="/companyname" />
								<Route element={<ThemePage />} path="/themepage" />
								<Route element={<Information />} path="/information" />
								<Route element={<NewThemeInfo />} path="/newthemeinfo" />
								<Route element={<Links />} path="/links" />
								<Route element={<HotelLinks />} path="/hotellinks" />
								<Route element={<MenuLink />} path="/menulink" />
								<Route element={<Payment />} path="/payment" />
								<Route element={<Products />} path="/products" />
								<Route element={<Ecommerce />} path="/ecommerce" />
								<Route element={<Gallery />} path="/gallery" />
								<Route element={<Card />} path="/card/:companyId" />
								<Route element={<LoadingScreen />} path="/:companyId" />
								<Route element={< LoadingScreen1 />} path="/" />
								<Route element={<Preview />} path="/preview" />
								<Route element={<AdminLogin />} path="/adminlogin" />
								<Route path="/dashboard/*" element={<DashBoard />} />
								<Route path="/compatible-devices" element={<Compatibility />} />
								<Route path="/how_to_create" element={<HowToUse />} />
								<Route path="/designUpload" element={<DesignUpload />} />
								<Route path="/partialDesignUpload" element={<PartialDesignUploadPage />} />
								<Route path="/packages" element={<Packages />} />
								<Route path="/partialPackage" element={<PartialPackage />} />
								<Route path="/confirmation/:tmid" element={<PaymentConfirmation />} />
								<Route path="/partialconfirmation/:tmid" element={<PartialConfirmation />} />
								<Route path="/addresspage" element={<AddressPage />} />
								<Route path="/productspage/:_id" element={<ProductsPage />} />
								<Route path="/allproducts" element={<AllProducts />} />
								<Route path="/productscomponent/:_id" element={<ProductCompoent />} />
								<Route path="/orderform" element={<OrderForm />} />
								<Route path="/ab" element={<ImageUploaderAndCropper />} />
								<Route path="/product/:_id" element={<Enter />} />
								<Route path="/cart" element={<CartPage />} />
								<Route path="/details" element={<DeliverDetails />} />
								<Route path="/orderComplete/:tmid" element={<OrderComplete />} />
								<Route path="/chri" element={<Chri />} />
								<Route path="/invite" element={<Invite />} />
								<Route path="/invitation" element={<Invitation />} />
								<Route path="/invites/:inviteId" element={<Home1 />} />
								<Route path="/invite/:inviteId" element={<InviteActivationPage />} />
								<Route path="/invitelogin" element={<InviteLogIn />} />
								<Route path="/invitesignup" element={<InviteSignUp />} />
								<Route path="/manukhandelwal" element={<DownloadContact />} />
								<Route path="/raghavkhandelwal" element={<DownloadContact2 />} />
								<Route path="/hemantkhandelwal" element={<DownloadContact3 />} />
								<Route path="/rajkumargupta" element={<DownloadContact4 />} />
								<Route path="/selforder" element={<SelfOrder />} />
								{/* <Route path="/parallax" element={<Parallax/>} /> */}
								{/* DIGITAL CARD WEBSITE ROUTER END */}

								{/* Review Tags Routes */}
								<Route path="/reviewsignup" element={<SignUp />} />
								<Route path="/reviewlogin" element={<LogIn />} />
								<Route path="/reviewchangepassword" element={<ReviewChangePassword />} />
								<Route path="/tags/:id" element={<ReviewLoadingScreen1 />} />
								<Route path="/tag/:id" element={<ReviewHome />} />
								<Route path="/review/dashboard" element={<Dashboard />} />
								<Route path="/linkgenerator" element={<LinkGenrator />} />
								{/* Multi Link Routes */}
								<Route path="/multisignup" element={<MultiSignUp />} />
								<Route path="/multilogin" element={<MultiLogIn />} />
								<Route path="/multi/:id" element={<MultiHome />} />


								{/* Standee Tags Routes */}
								<Route path="/standeesignup" element={<SignUp1 />} />
								<Route path="/standeelogin" element={<LogIn1 />} />
								{/* <Route path="/reviewchangepassword" element={<ReviewChangePassword/>} />   */}
								<Route path="/stnds/:id" element={<ReviewLoadingScreen2 />} />
								<Route path="/stnd/:id" element={<StandeeHome />} />
								<Route path="/shop" element={<Shop />} />
								{/* <Route path="/review/dashboard" element={<Dashboard/>} />   */}


								{/* Menu */}

								<Route path="/box" element={<Box />} />
								<Route path="/menus/:menuId" element={<Menu />} />
								<Route path="/menuDashboard/:menuId" element={<MenuDashBoard />} />
								<Route path="/addmenu" element={<AddMenu />} />
								<Route path="/vieworder" element={<ViewOrder />} />
								<Route path="/orderdetail" element={<OrderDetail />} />
								<Route path="/button" element={<MyComponent />} />
								<Route path="/printrecipt" element={<PrintRecipt />} />
								<Route path="/allmenu" element={<AllMenu />} />
								<Route path="/form" element={<Form />} />
								<Route path="/editmenu" element={<EditMenu />} />
								<Route path="/kitchen" element={<Kitchen />} />
								<Route path="/selectqy" element={<Selectqy />} />
								<Route path="/floatingmenu" element={<FloatingMenu />} />
								<Route path="/uploadmenucsv" element={<UploadMenuCsv />} />
								<Route path="/uploadYourLogo" element={<UploadYourLogo />} />
								<Route path="/restaurantdetails" element={<Details />} />
								<Route path="/menucheckout" element={<OrderComplete1 />} />
								<Route path="/orderdelivered" element={<OrderDelivered />} />
								<Route path="/menu/:menuId" element={<ActivationPage />} />
								<Route path="/menusignup" element={<MenuSignUp />} />
								<Route path="/menulogin" element={<MenuLogIn />} />
								<Route path="/cardhome" element={<CardHome />} />


								{/* Vehicle Tag Update */}
								<Route path="/activatetag" element={<ActivateTag />} />
								<Route path="/vehiclenumber" element={<VehicleNumber />} />
								<Route path="/verifynumber" element={<VerifyNumber />} />
								<Route path="/scanqr" element={<ScanQr />} />
								<Route path="/messagesend" element={<MessageSend />} />
								<Route path="/register" element={<Register />} />
								<Route path="/cong" element={<Cong />} />
								<Route path="/vehiclelogin" element={<VehicleLogin />} />
								<Route path="/vehiclesignup" element={<VehicleSignup />} />
								<Route path="/vehicle/:id" element={<VehicleHome />} />

								{/* Door Tag */}

								<Route path="/doorlogin" element={<DoorLogin />} />
								<Route path="/doorsignup" element={<DoorSignup />} />
								<Route path="/door/:id" element={<DoorTagHome />} />
								<Route path="/dooraddressupdate" element={<DoorTagRegister />} />

							{/* Master Dashboard */}
							<Route path="/masterlogin" element={<MasterLogin />} />
							<Route path="/masterdashboard" element={<MasterDashboard />} />

							</Routes>
						</HashRouter>
					</ParallaxProvider>
				</SnackbarProvider>
			</SessionContext.Provider>
		</div>
	);
}

export default App;
