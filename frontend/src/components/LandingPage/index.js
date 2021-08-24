import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import tulum from '../images/fachada_chilpancingo-min.png';
import los_cabos from '../images/nextiparkC2-min.png';
import cancun from '../images/haciendasbC2-min.png';

import lime from '../images/lime-min.png';
import avocado from '../images/avocado-min.png';
import pineapple from '../images/pineapple-min.png';
export default function LandingPage ({ requestAccount, account }) {
    // 0xeD2eF7d8e7E788147a57aA0EE99cBee926451Bb1
    return (
        <div id="content">
            <div>  
                <main className="bg-black text-gray-200 font-medium">    
                    <div className="bg-gray-900">
                        <header className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 py-4 lg:py-6 flex justify-between">
                            <a href="http://ec2-52-15-50-45.us-east-2.compute.amazonaws.com:3001" >
                                <span className="sr-only">SaaS landing page</span>
                                <span className="font-black text-2xl">Pofi Lending Protocol</span>
                            </a>
                            <nav className="flex items-center space-x-4">
                                {account === undefined ? (
                                    <button onClick={requestAccount} className="border border-gray-700 rounded-lg block text-center py-3 px-5 lg:px-8 font-bold bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  text-white mb-8">connect wallet</button>
                                ):(
                                    <span className="border border-gray-700 rounded-lg block text-center py-3 px-5 lg:px-8 font-bold bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  text-white mb-8 truncate text-xs">
                                        {account.slice(0, 3)+'...'+account.slice(-4)}
                                    </span>
                                )}                                
                            </nav>
                        </header>
                    </div>

                    <div className="py-4">
                        <div className="container mx-auto px-4 items-center justify-center border-4 border-light-blue-500 border-opacity-25">
                            <div className="w-full px-2 mt-2">
                                <div className="rounded-lg overflow-hidden md:flex">
                                    <div className="w-full">
                                        <div className="p-4 md:p-5">
                                            <div className="flex justify-between items-center"></div>
                                            <div>
                                                <p className="font-bold text-sm">Para obtener BNB de prueba: <a href="https://testnet.binance.org/faucet-smart" target="_blank">https://testnet.binance.org/faucet-smart</a></p>
                                                <p className="font-bold text-sm">test USDT address 0x080De04372D5f1E317d492645b923f6286C7eC86</p>
                                                <a href="https://testnet.bscscan.com/address/0x080De04372D5f1E317d492645b923f6286C7eC86#writeContract" target="_blank">get test USDT https://testnet.bscscan.com/</a>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>  
                    
                    <div className="container mx-auto px-4 items-center justify-center border-4 border-light-blue-500 border-opacity-25">
                        <div className="w-full px-2 mt-2">
                            <div className="rounded-lg overflow-hidden md:flex">
                                <div className="w-full">
                                    <div className="p-4 md:p-5">
                                        <div className="flex justify-between items-center"></div>
                                        <div>
                                            <p className="font-bold text-xl">Market size</p>
                                            <div className="flex items-center">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex flex-row-reverse justify-end">
                                                        <p>$0.00 USD</p>                                   
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-b py-14 from-black to-gray-900">
                        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 pb-12 lg:pb-16 xl:pb-24">
                            <div className="text-center mb-6 md:mb-8">
                                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Goods Export</h2>                            
                            </div>

                            <div className="flex justify-center mb-8 md:mb-20 lg:mb-24">
                                <nav className="inline-flex bg-indigo-100 rounded-lg overflow-hidden text-sm">                            
                                </nav>
                            </div>

                            <div className="grid md:grid-cols-3 gap-x-8 gap-y-8 items-start">
                                <div className="p-4 md:p-8  rounded-lg bg-gray-900">
                                    <img src={lime} className="object-cover h-80 w-full"></img>
                                    <div className="flex py-2 items-baseline mb-4">
                                        <h4 className="text-xl lg:text-2xl font-bold pr-3">Lime</h4>                                        
                                        <p className="text-m">from Veracruz, Mx.</p>                                    
                                    </div>                                
                                    <Link to={ROUTES.GOODS_EXPORT} className="border border-gray-700 rounded-lg block text-center py-3 px-5 lg:px-8 font-bold bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  text-white mb-8">Start Investing</Link>
                                    <ul className="text-gray-200 space-y-4 text-lg">
                                        <li>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>                                                
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 1 USDT</span> min</span>        
                                                </div>
                                                <div>                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 23.7% APY</span></span>        
                                                </div>
                                            </div>
                                            
                                        </li>                                    
                                    </ul>
                                </div>
                                <div className="p-4 md:p-8  rounded-lg bg-gray-900">
                                    <img src={pineapple} className="object-cover h-80 w-full"></img>
                                    <div className="flex py-2 items-baseline mb-4">                                        
                                        <h4 className="text-xl lg:text-2xl font-bold pr-3">Pineapple</h4>
                                        <p className="text-m">from Veracruz, Mx.</p>                                    
                                    </div>                                
                                    <Link to={ROUTES.GOODS_EXPORT} className="border border-gray-700 rounded-lg block text-center py-3 px-5 lg:px-8 font-bold bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  text-white mb-8">Start Investing</Link>
                                    <ul className="text-gray-200 space-y-4 text-lg">
                                        <li>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>                                                
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 1 USDT</span> min</span>        
                                                </div>
                                                <div>                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 18.5% APY</span></span>        
                                                </div>
                                            </div>
                                            
                                        </li>                                    
                                    </ul>
                                </div>
                                <div className="p-4 md:p-8  rounded-lg bg-gray-900">
                                    <img src={avocado} className="object-cover h-80 w-full"></img>
                                    <div className="flex py-2 items-baseline mb-4">                                        
                                        <h4 className="text-xl lg:text-2xl font-bold pr-3">Avocado</h4>
                                        <p className="text-m">from Jalisco, Mx.</p>                                    
                                    </div>                                
                                    <Link to={ROUTES.GOODS_EXPORT} className="border border-gray-700 rounded-lg block text-center py-3 px-5 lg:px-8 font-bold bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  text-white mb-8">Start Investing</Link>
                                    <ul className="text-gray-200 space-y-4 text-lg">
                                        <li>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>                                                
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 1 USDT</span> min</span>        
                                                </div>
                                                <div>                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 16.4% APY</span></span>        
                                                </div>
                                            </div>
                                            
                                        </li>                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>  
                    
                    <div className="bg-gradient-to-b py-14 from-black to-gray-900">
                        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 pb-12 lg:pb-16 xl:pb-24">
                            <div className="text-center mb-6 md:mb-8">
                                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Real State</h2>                            
                            </div>

                            <div className="flex justify-center mb-8 md:mb-20 lg:mb-24">
                                <nav className="inline-flex bg-indigo-100 rounded-lg overflow-hidden text-sm">                            
                                </nav>
                            </div>

                            <div className="grid md:grid-cols-3 gap-x-8 gap-y-8 items-start">
                                <div className="p-4 md:p-8  rounded-lg bg-gray-900">
                                    <img src={tulum} className="object-cover h-80 w-full"></img>
                                    <div className="flex py-2 items-baseline mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <h4 className="text-xl lg:text-2xl font-bold pr-3">Tulum</h4>
                                        <p className="text-m">Quintana Roo, Mx.</p>                                    
                                    </div>                                
                                    <Link to={ROUTES.GOODS_EXPORT} className="border border-gray-700 rounded-lg block text-center py-3 px-5 lg:px-8 font-bold bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  text-white mb-8">Start Investing</Link>
                                    <ul className="text-gray-200 space-y-4 text-lg">
                                        <li>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>                                                
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 1 USDT</span> min</span>        
                                                </div>
                                                <div>                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 15.7% APY</span></span>        
                                                </div>
                                            </div>
                                            
                                        </li>                                    
                                    </ul>
                                </div>
                                <div className="p-4 md:p-8  rounded-lg bg-gray-900">
                                    <img src={los_cabos} className="object-cover h-80 w-full"></img>
                                    <div className="flex py-2 items-baseline mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <h4 className="text-xl lg:text-2xl font-bold pr-3">Los Cabos</h4>
                                        <p className="text-m">Baja California, Mx.</p>                                    
                                    </div>                                
                                    <Link to={ROUTES.GOODS_EXPORT} className="border border-gray-700 rounded-lg block text-center py-3 px-5 lg:px-8 font-bold bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  text-white mb-8">Start Investing</Link>
                                    <ul className="text-gray-200 space-y-4 text-lg">
                                        <li>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>                                                
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 1 USDT</span> min</span>        
                                                </div>
                                                <div>                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 13.5% APY</span></span>        
                                                </div>
                                            </div>
                                            
                                        </li>                                    
                                    </ul>
                                </div>
                                <div className="p-4 md:p-8  rounded-lg bg-gray-900">
                                    <img src={cancun} className="object-cover h-80 w-full"></img>
                                    <div className="flex py-2 items-baseline mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <h4 className="text-xl lg:text-2xl font-bold pr-3">Cancún</h4>
                                        <p className="text-m">Quintana Roo, Mx.</p>                                    
                                    </div>                                
                                    <Link to={ROUTES.GOODS_EXPORT} className="border border-gray-700 rounded-lg block text-center py-3 px-5 lg:px-8 font-bold bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  text-white mb-8">Start Investing</Link>
                                    <ul className="text-gray-200 space-y-4 text-lg">
                                        <li>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>                                                
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 1 USDT</span> min</span>        
                                                </div>
                                                <div>                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                                    <span className="text-xs align-middle"><span className="text-xl font-bold"> 18.4% APY</span></span>        
                                                </div>
                                            </div>
                                            
                                        </li>                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>  
                                        
                    <footer className="bg-gray-900 text-gray-200 py-12 xl:pb-24">                        
                        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8">                        
                            <div>
                            <h5 className="text-xl font-bold text-gray-300">About us</h5>
                            <nav className="mt-4">
                            <ul className="space-y-2">
                                <li>
                                <a href="#" className="text-base hover:text-gray-500">Company</a>
                                </li>
                                <li>
                                <a href="#" className="text-base hover:text-gray-500">Download brochure</a>
                                </li>
                                <li>
                                <a href="#" className="text-base hover:text-gray-500">Resources</a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                            <div>
                            <h5 className="text-xl font-bold text-gray-300">Legal</h5>
                            <nav className="mt-4">
                            <ul className="space-y-2">
                                <li>
                                <a href="#" className="text-base hover:text-gray-500">Terms and conditions</a>
                                </li>
                                <li>
                                <a href="#" className="text-base hover:text-gray-500">Security</a>
                                </li>
                                <li>
                                <a href="#" className="text-base hover:text-gray-500">Privacy</a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 flex flex-col md:flex-row justify-between items-center space-y-4 mt-16 lg:mt-20">
                            <div className="text-sm space-y-4 md:space-y-1 text-center md:text-left">
                            <p>&copy;2020 Company. All rights reserved. | All rights reserved</p>
                            <p>Wisdom is easily acquired when hiding under the bed with a saucepan on your head.</p>
                        </div>                        
                        </div>
                        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 lg:mt-12">                        
                            <nav className="flex items-center space-x-2">
                                <a href="#" className="text-gray-500 hover:text-gray-200">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-200">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gray-200">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                                </a>
                            </nav>
                        </div>
                    </footer>  
                </main>
            </div>
        </div>
    );
}