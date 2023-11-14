import {Link} from "react-router-dom";
import axios from "axios";
import Search from "./SearchForm";
import SearchForm from "./SearchForm";

function Home() {
    return (
        <div style={{marginTop: '0px'}}>
            <title>Giao Hàng Nhanh: Vận Chuyển Siêu Nhanh, Giá Siêu Tốt – GHN.VN Giao Hàng Nhanh</title>
            <meta name="description"
                  content="Giao Hàng Nhanh phủ sóng 63 tỉnh thành trên toàn quốc, đơn nội thành giao tốc hành chỉ trong 24h. Chuyển phát nhanh, đơn hàng thành công, hài lòng khách hàng."/>
            <link rel="canonical" href="https://ghn.vn"/>
            <link rel="alternate" href="https://ghn.vn" hrefLang="vi-vn"/>
            <meta name="keywords" content="GHN.VN Giao Hàng Nhanh"/>
            <meta name="google-verification" content="GooGhywoiu9839t543j0s7543uw1"/>
            <meta name="robots" content="index,follow,noodp"/>
            <meta httpEquiv="x-dns-prefetch-control" content="on"/>
            <link rel="dns-prefetch" href="https://ghn.vn"/>
            <link rel="dns-prefetch" href="//hstatic.net"/>
            <link rel="dns-prefetch" href="//theme.hstatic.net/"/>
            <link rel="dns-prefetch" href="//file.hstatic.net/"/>
            <meta name="facebook-domain-verification" content="ct67ncn3vrskp7teqc6oo0bbysp3ca"/>
            <meta name="google-site-verification" content="ycUVH0YSGJ-1w5Qh5TOixQI4oVVjeuy7-h5vTVw3ulo"/>
            <link rel="preload" as="image" href="//theme.hstatic.net/200000472237/1001083717/14/logo.png?v=550"
                  type="image/png"/>
            <link rel="preload" as="image"
                  href="https://file.hstatic.net/200000472237/file/767x970_da38c3c2c071431bb74fb753af48c0ca.jpg"
                  type="image/jpg" media="(max-width: 767px)"/>
            <link rel="preload" as="image"
                  href="https://file.hstatic.net/200000472237/file/1920x700_7758febddb294f58a4374ab63c67360c.jpg"
                  type="image/jpg" media="(min-width: 768px)"/>
            <link rel="preload" as="image"
                  href="//file.hstatic.net/200000472237/file/767x970_62bbb912688f4c2cb00be5d10142ee0d_grande.png"
                  type="image/jpg" media="(max-width: 767px)"/>
            <link rel="preload" as="image"
                  href="https://file.hstatic.net/200000472237/file/1920x700_ae8664dce1cf4fbc90e34490898e7a1c.png"
                  type="image/jpg" media="(min-width: 768px)"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Giao Hàng Nhanh: Vận Chuyển Siêu Nhanh, Giá Siêu Tốt"/>
            <meta property="og:image"
                  content="http://theme.hstatic.net/200000472237/1001083717/14/share_fb_home.png?v=550"/>
            <meta property="og:image:secure_url"
                  content="https://theme.hstatic.net/200000472237/1001083717/14/share_fb_home.png?v=550"/>
            <meta property="og:description"
                  content="Giao Hàng Nhanh phủ sóng 63 tỉnh thành trên toàn quốc, đơn nội thành giao tốc hành chỉ trong 24h. Chuyển phát nhanh, đơn hàng thành công, hài lòng khách hàng."/>
            <meta property="og:url" content="https://ghn.vn"/>
            <meta property="og:site_name" content="GHN.VN Giao Hàng Nhanh"/>
            <meta name="facebook-domain-verification" content="5za1m3hxi4bqjq22z1vkjo26hyjub2"/>
            <meta name="description"
                  content="Giao Hàng Nhanh phủ sóng 63 tỉnh thành trên toàn quốc, đơn nội thành giao tốc hành chỉ trong 24h. Chuyển phát nhanh, đơn hàng thành công, hài lòng khách hàng."/>
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap&subset=vietnamese"
                as="style" type="text/css" rel="preload"/>
            <link
                href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap&subset=vietnamese"
                as="style" type="text/css" rel="stylesheet"/>
            <link rel="preload stylesheet" href="//theme.hstatic.net/200000472237/1001083717/14/plugins.css?v=550"
                  type="text/css" as="style"/>
            <link rel="stylesheet" as="style"
                  data-href="//theme.hstatic.net/200000472237/1001083717/14/render-library.css?v=550"/>
            <link rel="preload stylesheet" href="//theme.hstatic.net/200000472237/1001083717/14/styles.css?v=550"
                  type="text/css" as="style"/>
            <link href="https://file.hstatic.net/200000525917/file/jquery-script_a06dbb9a942a4a2c8e459410c8a19bc1.js"
                  rel="preload prefetch" as="script" type="text/javascript"/>
            <style dangerouslySetInnerHTML={{__html: ".grecaptcha-badge{visibility:hidden;}"}}/>
            <noscript>&lt;img height='1' width='1' style='display:none'
                src='https://www.facebook.com/tr?id=1149251642334426&amp;amp;ev=PageView&amp;amp;noscript=1'/&gt;</noscript>
            <div id="topbar" className="hidden-sm hidden-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12 col-left">
                            <ul className="topbar-info">
                                <li>
                                    <a href="tel:1900636677">
                                        <i className="ico ico-phone">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="512pt"
                                                 viewBox="0 -45 512.00132 512" width="512pt">
                                                <path
                                                    d="m479.730469 0h-48.140625c-4.1875 0-7.585938 3.398438-7.585938 7.585938 0 4.191406 3.398438 7.589843 7.585938 7.589843h48.140625c9.425781 0 17.09375 7.667969 17.09375 17.09375v115.804688c0 9.425781-7.667969 17.09375-17.09375 17.09375h-177.417969c-2.011719 0-3.941406.800781-5.367188 2.222656l-43.699218 43.699219v-38.332032c0-4.191406-3.394532-7.589843-7.585938-7.589843h-14.449218c-9.425782 0-17.09375-7.667969-17.09375-17.09375v-115.804688c0-9.425781 7.667968-17.09375 17.09375-17.09375h175.085937c4.191406 0 7.589844-3.398437 7.589844-7.589843 0-4.1875-3.398438-7.585938-7.589844-7.585938h-175.085937c-17.792969 0-32.269532 14.476562-32.269532 32.269531v115.804688c0 17.792969 14.476563 32.269531 32.269532 32.269531h6.863281v49.0625c0 3.070312 1.847656 5.835938 4.683593 7.011719.9375.386719 1.921876.578125 2.902344.578125 1.972656 0 3.914063-.773438 5.367188-2.222656l54.425781-54.429688h174.277344c17.792969 0 32.269531-14.476562 32.269531-32.269531v-115.804688c0-17.792969-14.476562-32.269531-32.269531-32.269531zm0 0"/>
                                                <path
                                                    d="m274.285156 97.324219c8.996094-6.15625 20.195313-13.824219 20.195313-26.933594 0-6.21875-2.519531-11.519531-7.28125-15.328125-4.210938-3.371094-10.015625-5.304688-15.925781-5.304688-10.914063 0-22.511719 6.710938-22.511719 19.144532 0 5.484375 2.308593 8.152344 7.058593 8.152344 5.359376 0 8.25-2.976563 8.25-5.773438 0-4.640625 2.660157-7.304688 7.300782-7.304688 5.464844 0 7.402344 3.722657 7.402344 6.90625 0 5.894532-6.949219 10.996094-14.308594 16.398438-8.304688 6.09375-16.890625 12.398438-16.890625 20.648438v9.609374c0 2.980469 4.0625 4.882813 6.859375 4.882813h35.265625c2.546875 0 4.78125-3.253906 4.78125-6.964844 0-3.601562-2.234375-6.761719-4.78125-6.761719h-25.828125v-.765624c0-3.476563 4.828125-6.777344 10.414062-10.605469zm0 0"/>
                                                <path
                                                    d="m336.453125 122.417969c5.394531 0 7.851563-2.527344 7.851563-4.878907v-10.375h4.132812c2.464844 0 4.882812-3.59375 4.882812-7.257812 0-4.988281-2.53125-7.257812-4.882812-7.257812h-4.132812v-6.808594c0-2.203125-2.054688-4.78125-7.851563-4.78125s-7.851563 2.574218-7.851563 4.78125v6.808594h-8.1875l17.441407-34.988282c.265625-.613281.507812-1.269531.507812-1.933594 0-1.617187-1.035156-3.167968-2.917969-4.367187-1.535156-.972656-3.46875-1.601563-4.933593-1.601563-2.882813 0-5.207031 1.429688-6.550781 4.03125l-22.882813 44.867188c-.703125 1.289062-.808594 2.453125-.808594 3.03125 0 3.277344 2.125 5.476562 5.28125 5.476562h23.050781v10.371094c0 2.355469 2.457032 4.882813 7.851563 4.882813zm0 0"/>
                                                <path
                                                    d="m395.671875 48.246094-34.765625 71.414062c-.324219.648438-.511719 1.351563-.511719 1.9375 0 2.597656 2.28125 5.378906 5.675781 5.378906 1.992188 0 3.871094-1.050781 4.570313-2.546874l34.867187-71.417969c.339844-.679688.410157-1.429688.410157-1.9375 0-3.21875-3.085938-5.378907-5.972657-5.378907-1.953124 0-3.511718.929688-4.273437 2.550782zm0 0"/>
                                                <path
                                                    d="m422.234375 74.875c4.3125 0 7.953125-2.234375 7.953125-4.882812v-6.511719h17.476562v6.773437l-24.351562 42.171875c-.488281.882813-.707031 1.695313-.707031 2.636719 0 4.683594 5.234375 7.949219 9.933593 7.949219 2.234376 0 3.699219-.699219 4.46875-2.148438l23.179688-44.375c.746094-1.398437 3.183594-6.222656 3.183594-9.46875v-12.382812c0-2.128907-3.328125-4.878907-6.863282-4.878907h-35.164062c-3.460938 0-6.863281 2.417969-6.863281 4.878907v15.355469c0 2.691406 3.480469 4.882812 7.753906 4.882812zm0 0"/>
                                                <path
                                                    d="m313.769531 263.433594c-3.945312-3.945313-9.195312-6.117188-14.777343-6.117188-5.582032 0-10.832032 2.171875-14.777344 6.117188l-46.378906 46.378906c-18.46875-9.652344-34.535157-18.855469-52.488282-33.996094-3.203125-2.699218-7.988281-2.292968-10.691406.910156-2.699219 3.203126-2.292969 7.988282.910156 10.691407 20.734375 17.480469 38.78125 27.347656 60.21875 38.429687 2.933594 1.515625 6.511719.960938 8.847656-1.375l24.953126-24.949218 82.261718 82.261718c-26.570312 22.808594-64.199218 30.75-106.921875 22.351563-48.046875-9.449219-98.890625-39.03125-143.164062-83.304688-44.273438-44.273437-73.859375-95.121093-83.308594-143.167969-8.398437-42.726562-.457031-80.355468 22.347656-106.921874l82.273438 82.269531-24.960938 24.957031c-2.335937 2.335938-2.890625 5.917969-1.371093 8.851562 15.109374 29.214844 27.300781 50.652344 57.839843 81.195313 2.964844 2.960937 7.769531 2.960937 10.730469 0 2.964844-2.964844 2.964844-7.769531 0-10.730469-27.378906-27.378906-38.851562-46.339844-52.535156-72.515625l46.382812-46.386719c3.949219-3.945312 6.121094-9.195312 6.121094-14.777343s-2.171875-10.832031-6.121094-14.777344l-74.382812-74.382813c-3.945313-3.949218-9.195313-6.125-14.777344-6.125s-10.832031 2.175782-14.777344 6.121094l-19.996094 19.996094c-30.429687 30.429688-41.675781 75.234375-31.664062 126.152344 10.023438 50.972656 41.085938 104.589844 87.46875 150.972656 46.378906 46.378906 99.996094 77.441406 150.96875 87.460938 12.132812 2.386718 23.914062 3.566406 35.242188 3.5625 36.207031 0 67.730468-12.046876 90.910156-35.226563l19.992187-19.992187c3.949219-3.949219 6.121094-9.195313 6.121094-14.777344 0-5.582032-2.171875-10.832032-6.121094-14.777344zm-247.816406-218.261719c1.078125-1.078125 2.515625-1.675781 4.046875-1.675781s2.96875.59375 4.046875 1.675781l74.386719 74.386719c1.078125 1.078125 1.675781 2.515625 1.675781 4.046875s-.597656 2.96875-1.675781 4.046875l-14.628906 14.628906-82.480469-82.480469zm311.464844 311.464844-14.632813 14.628906-82.46875-82.472656 14.628906-14.628907c1.078126-1.082031 2.519532-1.675781 4.046876-1.675781 1.527343 0 2.964843.59375 4.046874 1.675781l74.378907 74.375c2.230469 2.234376 2.230469 5.867188 0 8.097657zm0 0"/>
                                            </svg>
                                        </i>
                                        <span> <span>1900 636677</span> </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://ghn.vn/blogs/he-thong-buu-cuc">
                                        <i className="ico ico-store">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
                                                 x="0px" y="0px" viewBox="0 0 512 512"
                                                 style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve"
                                                 width="512px" height="512px">
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M416,426c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C426,430.48,421.52,426,416,426z"
                                                                data-original="#000000" className="active-path"
                                                                data-old_color="#000000" fill="#9B9B9B"/>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M446,47.432V30c0-16.542-13.458-30-30-30H96C79.458,0,66,13.458,66,30v17.432C0.773,167.896,0.003,164.319,0,169.989 c0,0.004,0,0.007,0,0.011v20c0,17.333,10.022,33.453,26,42.62V502c0,5.522,4.478,10,10,10h440c5.522,0,10-4.478,10-10V232.62 c15.817-9.159,26-25.469,26-42.62v-20c0-0.004,0-0.007,0-0.011C511.997,164.258,510.591,166.721,446,47.432z M485.088,160h-61.88 L389.875,60h40.213L485.088,160z M346,180h60v10c0,16.542-13.458,30-30,30s-30-13.458-30-30V180z M344.471,160L327.805,60h40.987 l33.333,100H344.471z M86,30c0-5.514,4.486-10,10-10h320c5.514,0,10,4.486,10,10v10c-9.522,0-330.404,0-340,0V30z M326,180v10 c0,16.542-13.458,30-30,30s-30-13.458-30-30v-10H326z M266,160V60h41.529l16.667,100H266z M187.805,160l16.667-100H246v100 H187.805z M246,180v10c0,16.542-13.458,30-30,30s-30-13.458-30-30v-10H246z M109.874,160l33.333-100h40.988l-16.667,100H109.874z M166,180v10c0,16.542-13.458,30-30,30s-30-13.458-30-30v-10H166z M81.912,60h40.213L88.792,160h-61.88L81.912,60z M20,190v-10h66 v10c0,15.701-15.729,30-33,30c-4.354,0-8.866-0.945-13.066-2.742C28.011,212.187,20,201.232,20,190z M206,492H106v-86h100V492z M206,386H106v-86h100V386z M466,492H226V290c0-5.522-4.478-10-10-10H96c-5.522,0-10,4.478-10,10v202H46V239.511 c2.318,0.315,4.653,0.489,7,0.489c13.161,0,26.465-5.214,36.498-14.306c2.219-2.01,4.217-4.16,6.01-6.413 C104.602,231.822,119.36,240,136,240c16.339,0,30.87-7.878,40-20.035C185.13,232.122,199.661,240,216,240s30.87-7.878,40-20.035 C265.13,232.122,279.661,240,296,240s30.87-7.878,40-20.035C345.13,232.122,359.661,240,376,240 c16.64,0,31.398-8.178,40.492-20.719c1.793,2.253,3.791,4.402,6.01,6.413C432.535,234.786,445.839,240,459,240 c2.342,0,4.677-0.168,7-0.485V492z M492,190c0,11.548-8.309,22.629-20.674,27.575c-4.044,1.61-8.19,2.425-12.326,2.425 c-17.271,0-33-14.299-33-30v-10h66V190z"
                                                                data-original="#000000" className="active-path"
                                                                data-old_color="#000000" fill="#9B9B9B"/>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M436,386h-10v-96c0-5.522-4.478-10-10-10H296c-5.522,0-10,4.478-10,10v96h-10c-5.522,0-10,4.478-10,10 c0,5.522,4.478,10,10,10h160c5.522,0,10-4.478,10-10C446,390.478,441.522,386,436,386z M406,386H306v-86h100V386z"
                                                                data-original="#000000" className="active-path"
                                                                data-old_color="#000000" fill="#9B9B9B"/>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M376,426h-80c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h80c5.522,0,10-4.478,10-10C386,430.478,381.522,426,376,426 z"
                                                                data-original="#000000" className="active-path"
                                                                data-old_color="#000000" fill="#9B9B9B"/>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </i>
                                        <span>Bưu cục GHN <span/> toàn quốc</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 col-right">
                            <ul className="topbar-linklist">
                                <li className="link"><a href="/pages/ve-ghn-1" title="Về GHN">Về GHN</a></li>
                                <li className="language">
                                    <a href="/" title="Ngôn ngữ">
                                        <i className="fa fa-angle-down"/>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px"
                                             y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}}
                                             xmlSpace="preserve">
                                            <polygon style={{fill: '#D80027'}}
                                                     points="196.641,85.337 0,85.337 0,426.663 196.641,426.663 512,426.663 512,85.337 "/>
                                            <polygon style={{fill: '#FFDA44'}}
                                                     points="256,157.279 278.663,227.026 352,227.026 292.668,270.132 315.332,339.881 256,296.774 196.668,339.881 219.332,270.132 160,227.026 233.337,227.026 "/>
                                        </svg>
                                    </a>
                                    <div className="language_navcontent js-parents">
                                        <div className="language_dropdown">
                                            <ul className="list-unstyled">
                                                <li className="js-hover">
                                                    <a href="/">
                              <span>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                     style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve"> <polygon
                                    style={{fill: '#ff1d35'}}
                                    points="196.641,85.337 0,85.337 0,426.663 196.641,426.663 512,426.663 512,85.337 "/> <polygon
                                    style={{fill: '#FFDA44'}}
                                    points="256,157.279 278.663,227.026 352,227.026 292.668,270.132 315.332,339.881 256,296.774 196.668,339.881 219.332,270.132 160,227.026 233.337,227.026 "/></svg>
                              </span>
                                                        Tiếng Việt
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                              <span>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                     style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve"> <rect y="85.333"
                                                                                                              style={{fill: '#F0F0F0'}}
                                                                                                              width={512}
                                                                                                              height="341.337"/> <polygon
                                    style={{fill: '#D80027'}}
                                    points="288,85.33 224,85.33 224,223.996 0,223.996 0,287.996 224,287.996 224,426.662 288,426.662 288,287.996 512,287.996 512,223.996 288,223.996 "/> <g> <polygon
                                    style={{fill: '#0052B4'}} points="393.785,315.358 512,381.034 512,315.358 	"/> <polygon
                                    style={{fill: '#0052B4'}}
                                    points="311.652,315.358 512,426.662 512,395.188 368.307,315.358 	"/> <polygon
                                    style={{fill: '#0052B4'}}
                                    points="458.634,426.662 311.652,344.998 311.652,426.662 	"/> </g> <polygon
                                    style={{fill: '#F0F0F0'}}
                                    points="311.652,315.358 512,426.662 512,395.188 368.307,315.358 "/> <polygon
                                    style={{fill: '#D80027'}}
                                    points="311.652,315.358 512,426.662 512,395.188 368.307,315.358 "/> <g> <polygon
                                    style={{fill: '#0052B4'}} points="90.341,315.356 0,365.546 0,315.356 	"/> <polygon
                                    style={{fill: '#0052B4'}}
                                    points="200.348,329.51 200.348,426.661 25.491,426.661 	"/> </g> <polygon
                                    style={{fill: '#D80027'}}
                                    points="143.693,315.358 0,395.188 0,426.662 0,426.662 200.348,315.358 "/> <g> <polygon
                                    style={{fill: '#0052B4'}} points="118.215,196.634 0,130.958 0,196.634 	"/> <polygon
                                    style={{fill: '#0052B4'}}
                                    points="200.348,196.634 0,85.33 0,116.804 143.693,196.634 	"/> <polygon
                                    style={{fill: '#0052B4'}} points="53.366,85.33 200.348,166.994 200.348,85.33 	"/> </g> <polygon
                                    style={{fill: '#F0F0F0'}}
                                    points="200.348,196.634 0,85.33 0,116.804 143.693,196.634 "/> <polygon
                                    style={{fill: '#D80027'}}
                                    points="200.348,196.634 0,85.33 0,116.804 143.693,196.634 "/> <g> <polygon
                                    style={{fill: '#0052B4'}} points="421.659,196.636 512,146.446 512,196.636 	"/> <polygon
                                    style={{fill: '#0052B4'}}
                                    points="311.652,182.482 311.652,85.331 486.509,85.331 	"/> </g> <polygon
                                    style={{fill: '#D80027'}}
                                    points="368.307,196.634 512,116.804 512,85.33 512,85.33 311.652,196.634 "/></svg>
                              </span>
                                                        Tiếng Anh
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainHeader--height">
                <header id="header" className="header ">
                    <style
                        dangerouslySetInnerHTML={{__html: "\n\t.skinny-banner {display: none;}\n\t.skinny-banner.show {display: block;}\n\t.skinny-banner .skinny-banner-content {position: relative;}\n\t.skinny-banner .skinny-banner-content .close {\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\tdisplay: inline-block;\n\twidth: 24px;\n\theight: 24px;\n\tbackground: #000;\n\tcolor: #fff;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tline-height: 24px;\n\tcursor: pointer; \n\t}\n\t.skinny-banner .skinny-banner-content img {width: 100%;}\n"}}/>
                    <div id="header-main">
                        <div className="container">
                            <div className="header-row">
                                <div className="header-left">
                                    <div className="box-button-mb visible-sm visible-xs">
                                        <a href="magicpost/src/index#menu-sidebar" className="mb-menu-btn" id="trigger">
                                            <span className="icon-bar"/>
                                            <span className="icon-bar"/>
                                            <span className="icon-bar"/>
                                        </a>
                                    </div>
                                    <div className="box-logo">
                                        <a href="https://ghn.vn" itemProp="url" title="GHN.VN Giao Hàng Nhanh">
                                            <h1 className="logo">
                                                <img itemProp="logo" width={150} height={34}
                                                     src="//theme.hstatic.net/200000472237/1001083717/14/logo.png?v=550"
                                                     alt="GHN.VN Giao Hàng Nhanh" className="logoimg"/>
                                            </h1>
                                        </a>
                                    </div>
                                    <div className="box-language-mb visible-sm visible-xs">
                                        <a href="/" title="Ngôn ngữ">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
                                                 x="0px" y="0px" viewBox="0 0 512 512"
                                                 style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                                                <polygon style={{fill: '#D80027'}}
                                                         points="196.641,85.337 0,85.337 0,426.663 196.641,426.663 512,426.663 512,85.337 "/>
                                                <polygon style={{fill: '#FFDA44'}}
                                                         points="256,157.279 278.663,227.026 352,227.026 292.668,270.132 315.332,339.881 256,296.774 196.668,339.881 219.332,270.132 160,227.026 233.337,227.026 "/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="header-middle" id="nav-menu">
                                    <nav className="main-nav-menu">
                                        <ul className="menu__list menu__list--top">
                                            <li className="menu__item--dropdown active">
                                                <a href="/" title="Trang chủ" className="menu__link">
                                                    Trang chủ
                                                </a>
                                            </li>
                                            <li className="menu__item--dropdown ">
                                                <a href="magicpost/src/index#" title="Dịch vụ" className="menu__link">
                                                    Dịch vụ
                                                    <i className="fa fa-chevron-down" aria-hidden="true"/>
                                                </a>
                                            </li>
                                            <li className="menu__item--dropdown ">
                                                <a href="magicpost/src/index#" title="GIỚI THIỆU"
                                                   className="menu__link">
                                                    GIỚI THIỆU
                                                    <i className="fa fa-chevron-down" aria-hidden="true"/>
                                                </a>
                                            </li>
                                            <li className="menu__item--dropdown ">
                                                <a href="magicpost/src/index#" title="HỖ TRỢ" className="menu__link">
                                                    HỖ TRỢ
                                                    <i className="fa fa-chevron-down" aria-hidden="true"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-right">
                                    <div className="box-register">
                                        <Link to={'/login'}
                                              onclick="registerRedirect('https://sso.ghn.vn/register/');" rel="noopener"
                                              className="btn-regis button"> ĐĂNG NHẬP (dành cho nhân viên)</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <SearchForm></SearchForm>
                    </div>

                </header>
            </div>
            <div className="main-body">
                <div className="scroller">
                    <div className="scroller-inner">
                        <main className=" main-index ">
                            <section className="section section-banner">
                                <div className="container">
                                    <div className="s-title text-center">
                                        <h2>Giao nhanh hơn 6 tiếng</h2>
                                        <p>GHN giúp bạn giao hàng đến người nhận nhanh hơn 6 tiếng so với các đơn vị vận
                                            chuyển khác.</p>
                                    </div>
                                    <video playsInline autoPlay loop muted preload="auto" id="video-desk"
                                           poster="https://file.hstatic.net/200000472237/file/video-banner_b16761a3ebde4346a2ce5dd8e661fc8c.jpg"
                                           className="hidden-sm hidden-xs">
                                        <source type="video/mp4" className="lazyload-video" src
                                                data-src="https://file.hstatic.net/1000376681/file/1920x900_d8d881b358674809a162eb6b6069ff10.mp4"/>
                                    </video>
                                    <video playsInline autoPlay loop muted preload="auto" id="video-mb"
                                           poster="https://file.hstatic.net/200000472237/file/767x970_da38c3c2c071431bb74fb753af48c0ca.jpg"
                                           className="hidden-lg hidden-md">
                                        <source type="video/mp4" className="lazyload-video" src
                                                data-src="https://file.hstatic.net/1000376681/file/767x970_67e1083b6547444a90920dfea13209c3.mp4"/>
                                    </video>
                                </div>
                            </section>
                            <section className="section section-policy">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6 col-xs-6 col-policy">
                                            <div className="box-policy">
                                                <div className="ic-policy">
                                                    <img width={50} height={50} className="dt-width-auto"
                                                         src="//theme.hstatic.net/200000472237/1001083717/14/icon-app1_small.png?v=550"
                                                         alt="Top công ty giao <br>nhận hàng đầu VN"/>
                                                </div>
                                                <div className="desc-policy">
                                                    <p>Top công ty giao <br/>nhận hàng đầu VN</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-xs-6 col-policy">
                                            <div className="box-policy">
                                                <div className="ic-policy">
                                                    <img width={50} height={50} className="dt-width-auto"
                                                         src="//theme.hstatic.net/200000472237/1001083717/14/icon-app2_small.png?v=550"
                                                         alt="Mạng lưới phủ sóng <br> 100% 63 tỉnh thành"/>
                                                </div>
                                                <div className="desc-policy">
                                                    <p>Mạng lưới phủ sóng <br/> 100% 63 tỉnh thành</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-xs-6 col-policy">
                                            <div className="box-policy">
                                                <div className="ic-policy">
                                                    <img width={50} height={50} className="dt-width-auto"
                                                         src="//theme.hstatic.net/200000472237/1001083717/14/icon-app3_small.png?v=550"
                                                         alt="Giao hàng nhanh <br> Tỷ lệ hoàn hàng thấp"/>
                                                </div>
                                                <div className="desc-policy">
                                                    <p>Giao hàng nhanh <br/> Tỷ lệ hoàn hàng thấp</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-xs-6 col-policy">
                                            <div className="box-policy">
                                                <div className="ic-policy">
                                                    <img width={50} height={50} className="dt-width-auto"
                                                         src="//theme.hstatic.net/200000472237/1001083717/14/icon-app4_small.png?v=550"
                                                         alt="Hệ thống quản lý <br> trực tuyến 24/7"/>
                                                </div>
                                                <div className="desc-policy">
                                                    <p>Hệ thống quản lý <br/> trực tuyến 24/7</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section section-maps">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12 col-xs-12 col-left">
                                            <div className="s-title">
                                                <h2>Bưu cục <span className="text-color">GHN</span></h2>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-sm-12 col-xs-12 col-right">
                                            <div className="list-info">
                                                <ul>
                                                    <li>
                                                        <h4></h4>
                                                        <p/>
                                                    </li>
                                                    <li>
                                                        <h4></h4>
                                                        <p/>
                                                    </li>
                                                    <li>
                                                        <h4></h4>
                                                        <p/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row stores">
                                        <div className="col-md-4 col-sm-12 col-xs-12 col-left">
                                            <div className="address-map loading">
                                                <div className="address-loading"/>
                                                <div className="tab-content">
                                                    <div id="tabaddress1" className="tab-pane fade in active">
                                                        <select name="change-tinh" className="change-tinh">
                                                            <option value="all">Chọn tỉnh/Thành phố</option>
                                                        </select>
                                                        <select name="select-quan" className="select-quan"/>
                                                        <div className="address-cont">
                                                            <div className="address-detail">
                                                                <ul id="address-link">
                                                                    <li id="empty"
                                                                        style={{display: 'none', color: 'red'}}>Không có
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-sm-12 col-xs-12 col-right">
                                            <div className="img-map load-video" id="map-store"><img
                                                className="dt-width-100" width={800} height={580}
                                                src="https://file.hstatic.net/200000472237/file/capture_6532b3da66514de88eab5a3b__1__ab1b34176a7e40139c62f2fa32dbc373_large.jpg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section section-video">
                                <div className="container">
                                    <div className="s-title">
                                        <h2>Đối tác của <span className="text-color">GHN</span></h2>
                                    </div>
                                    <div className="clearfix"/>
                                    <div className="row">
                                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 pd-r2">
                                            <div className="ytvideo iframe-video load-video" style={{width: '100%'}}>
                                                <picture>
                                                    <source className="lazyload"
                                                            data-srcset="//theme.hstatic.net/200000472237/1001083717/14/bg-video-mb.jpg?v=550"
                                                            srcSet="https://file.hstatic.net/200000472237/file/767x970_da38c3c2c071431bb74fb753af48c0ca.jpg"
                                                            media="(max-width: 767px)"/>
                                                    <source className="lazyload"
                                                            data-srcset="//theme.hstatic.net/200000472237/1001083717/14/bg-video.jpg?v=550"
                                                            srcSet="//theme.hstatic.net/200000472237/1001083717/14/bg-video_small.jpg?v=550"
                                                            media="(min-width: 768px)"/>
                                                    <img className="dt-width-100" alt="Đối tác của" width={767}
                                                         height={970}/>
                                                </picture>
                                                <span className="video-bn">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                 version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 30.051 30.051"
                                 style={{enableBackground: 'new 0 0 30.051 30.051'}} xmlSpace="preserve"><g><path
                                d="M19.982,14.438l-6.24-4.536c-0.229-0.166-0.533-0.191-0.784-0.062c-0.253,0.128-0.411,0.388-0.411,0.669v9.069   c0,0.284,0.158,0.543,0.411,0.671c0.107,0.054,0.224,0.081,0.342,0.081c0.154,0,0.31-0.049,0.442-0.146l6.24-4.532   c0.197-0.145,0.312-0.369,0.312-0.607C20.295,14.803,20.177,14.58,19.982,14.438z"/></g></svg>
                          </span>
                                                <iframe id="if-video" className="hidden"
                                                        data-src="https://www.youtube.com/embed/_Sjf4z7Ui0I?rel=0"
                                                        frameBorder={0}
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen/>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 pd-l2">
                                            <div className="slider_customers owl-carousel d-flex-owl"
                                                 id="slider_home_customers" data-allin={1}>
                                                <div className="item-owl item-slide slile-item-partner1">
                                                    <div className="quote-image">
                                                        <img
                                                            src="https://file.hstatic.net/200000472237/file/310x172_30df0cca14b144b89666f09bb550d9da.jpg"
                                                            data-mobile="//theme.hstatic.net/200000472237/1001083717/14/banner_customers1_large.jpg?v=550"
                                                            data-src="//theme.hstatic.net/200000472237/1001083717/14/banner_customers1_grande.jpg?v=550"
                                                            alt="Lazada" width={310} height={172}
                                                            className="lazyload dt-width-100"/>
                                                    </div>
                                                    <div className="quote-body">
                                                        <div className="logo-quote text-center">
                                                            <img width={79} height={20} className="lazyload"
                                                                 src="https://file.hstatic.net/200000472237/file/79x20_323e3d18ead043be9b026e0171afc861.png"
                                                                 data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_customers1_small.png?v=550"
                                                                 alt="Lazada"/>
                                                        </div>
                                                        <p className="txt-quote">"GHN đã và luôn là đối tác rất tin cậy
                                                            của Lazada hơn 7 năm qua. Việc đầu tư vào Hệ thống phân loại
                                                            hàng hoàn toàn tự động sẽ giúp GHN tăng tính cạnh tranh,
                                                            đồng thời mang đến cho các đối tác như chúng tôi một dịch vụ
                                                            vận chuyển xuất sắc." </p>
                                                        <hr className="line-customer"/>
                                                        <p className="name-quote">Anh Fabian Wandt</p>
                                                        <small>Giám Đốc Vận Hành Lazada</small>
                                                    </div>
                                                </div>
                                                <div className="item-owl item-slide slile-item-partner2">
                                                    <div className="quote-image">
                                                        <img
                                                            src="https://file.hstatic.net/200000472237/file/310x172_30df0cca14b144b89666f09bb550d9da.jpg"
                                                            data-mobile="//theme.hstatic.net/200000472237/1001083717/14/banner_customers2_large.jpg?v=550"
                                                            data-src="//theme.hstatic.net/200000472237/1001083717/14/banner_customers2_grande.jpg?v=550"
                                                            alt="Tiki" width={310} height={172}
                                                            className="lazyload dt-width-100"/>
                                                    </div>
                                                    <div className="quote-body">
                                                        <div className="logo-quote text-center">
                                                            <img width={79} height={20} className="lazyload"
                                                                 src="https://file.hstatic.net/200000472237/file/79x20_323e3d18ead043be9b026e0171afc861.png"
                                                                 data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_customers2_small.png?v=550"
                                                                 alt="Tiki"/>
                                                        </div>
                                                        <p className="txt-quote">"GHN là một đối tác quan trọng với
                                                            Tiki, giúp hàng hoá trên Tiki đến được với nhiều tỉnh xa,
                                                            thậm chí đến cả những huyện đảo. Điều này mang đến sự thuận
                                                            lợi rất lớn cho khách hàng, xoá bỏ được các rào cản về địa
                                                            lý. "</p>
                                                        <hr className="line-customer"/>
                                                        <p className="name-quote">Anh Trần Ngọc Thái Sơn</p>
                                                        <small>Nhà Sáng Lập &amp; Tổng Giám Đốc Tiki</small>
                                                    </div>
                                                </div>
                                                <div className="item-owl item-slide slile-item-partner3">
                                                    <div className="quote-image">
                                                        <img
                                                            src="https://file.hstatic.net/200000472237/file/310x172_30df0cca14b144b89666f09bb550d9da.jpg"
                                                            data-mobile="//theme.hstatic.net/200000472237/1001083717/14/banner_customers3_large.jpg?v=550"
                                                            data-src="//theme.hstatic.net/200000472237/1001083717/14/banner_customers3_grande.jpg?v=550"
                                                            alt="Sendo" width={310} height={172}
                                                            className="lazyload dt-width-100"/>
                                                    </div>
                                                    <div className="quote-body">
                                                        <div className="logo-quote text-center">
                                                            <img width={79} height={20} className="lazyload"
                                                                 src="https://file.hstatic.net/200000472237/file/79x20_323e3d18ead043be9b026e0171afc861.png"
                                                                 data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_customers3_small.png?v=550"
                                                                 alt="Sendo"/>
                                                        </div>
                                                        <p className="txt-quote">"GHN là một trong những đối tác quan
                                                            trọng của Sendo với mục tiêu phục vụ ngành thương mại điện
                                                            tử và nền kinh tế số đang tăng trưởng vượt bậc, là cầu nối
                                                            vận chuyển hàng hoá từ các nhà bán đến tay người tiêu dùng
                                                            một cách an toàn và nhanh chóng. "</p>
                                                        <hr className="line-customer"/>
                                                        <p className="name-quote">Anh Trần Hải Linh</p>
                                                        <small>Tổng Giám Đốc Sendo</small>
                                                    </div>
                                                </div>
                                                <div className="item-owl item-slide slile-item-partner4">
                                                    <div className="quote-image">
                                                        <img
                                                            src="https://file.hstatic.net/200000472237/file/310x172_30df0cca14b144b89666f09bb550d9da.jpg"
                                                            data-mobile="//theme.hstatic.net/200000472237/1001083717/14/banner_customers4_large.jpg?v=550"
                                                            data-src="//theme.hstatic.net/200000472237/1001083717/14/banner_customers4_grande.jpg?v=550"
                                                            alt="Shopee" width={310} height={172}
                                                            className="lazyload dt-width-100"/>
                                                    </div>
                                                    <div className="quote-body">
                                                        <div className="logo-quote text-center">
                                                            <img width={79} height={20} className="lazyload"
                                                                 src="https://file.hstatic.net/200000472237/file/79x20_323e3d18ead043be9b026e0171afc861.png"
                                                                 data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_customers4_small.png?v=550"
                                                                 alt="Shopee"/>
                                                        </div>
                                                        <p className="txt-quote">GHN là một trong những đối tác vận
                                                            chuyển uy tín của Shopee. Chúng tôi kỳ vọng với hệ thống
                                                            phân loại hàng tự động, GHN không chỉ rút ngắn thời gian
                                                            phân loại mà còn giúp cả người bán và người mua trên Shopee
                                                            an tâm đơn hàng được giao nhanh hơn, an toàn hơn.</p>
                                                        <hr className="line-customer"/>
                                                        <p className="name-quote">Anh Trần Tuấn Anh</p>
                                                        <small>Giám Đốc Điều Hành Shopee Việt Nam</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section section-blog-index">
                                <div className="container">
                                    <div className="s-title">
                                        <h2>Tin tức mới</h2>
                                    </div>
                                    <div className="list-article-content blog-posts">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-7 col-sm-12 blog-col-left">
                                                <div className="blog-item item">
                                                    <div className="blog-img">
                                                        <a href="/blogs/tin-tuc-ghn/thong-bao-lich-hoat-dong-le-quoc-khanh-292023"
                                                           title="GIAO HÀNG NHANH THÔNG BÁO LỊCH HOẠT ĐỘNG LỄ QUỐC KHÁNH 2/9 NĂM 2023">
                                                            <img width={700} height={420}
                                                                 className="lazyload dt-width-100"
                                                                 src="//file.hstatic.net/200000472237/article/2-9-1200-270_a943d5b3308d42f49e32003d8baa617b_small.png"
                                                                 data-src="//file.hstatic.net/200000472237/article/2-9-1200-270_a943d5b3308d42f49e32003d8baa617b_1024x1024.png"
                                                                 data-mobile="//file.hstatic.net/200000472237/article/2-9-1200-270_a943d5b3308d42f49e32003d8baa617b_grande.png"
                                                                 alt="GIAO HÀNG NHANH THÔNG BÁO LỊCH HOẠT ĐỘNG LỄ QUỐC KHÁNH 2/9 NĂM 2023"/>
                                                        </a>
                                                    </div>
                                                    <div className="blog-detail">
                                                        <h3 className="blog-title">
                                                            <a href="/blogs/tin-tuc-ghn/thong-bao-lich-hoat-dong-le-quoc-khanh-292023"
                                                               title="GIAO HÀNG NHANH THÔNG BÁO LỊCH HOẠT ĐỘNG LỄ QUỐC KHÁNH 2/9 NĂM 2023">GIAO
                                                                HÀNG NHANH THÔNG BÁO LỊCH HOẠT ĐỘNG LỄ QUỐC KHÁNH 2/9
                                                                NĂM 2023</a>
                                                        </h3>
                                                        <div className="blog-meta">
                                                            <span className="author hidden">Hoàng</span>
                                                            <span className="date">
                                  <span><i className="fa fa-calendar"/> </span>
                                  <time pubdate dateTime="2023/08/28">28/08/2023</time>
                                </span>
                                                        </div>
                                                        <div className="blog-shortdesc">
                                                            <p>Đầu tiên, GiaoHangNhanh (GHN) kính chúc Quý Khách hàng
                                                                thật nhiều sức khoẻ và có một Kỳ nghỉ lễ Quốc Khánh thật
                                                                trọn vẹn bên gia đình.Nhằm cung ứng dịch vụ giao/nhận
                                                                hàng hoá tốt nhất đến Quý Khách hàng, GHN thông báo đến
                                                                Quý Khách hàng về Lịch làm...</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 col-sm-12 blog-col-right">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col sm-12">
                                                        <div className="blog-item clearfix">
                                                            <div className="blog-img">
                                                                <a href="/blogs/tip-ban-hang/cach-cham-soc-khach-hang-sau-ban-hang-danh-cho-shop-moi"
                                                                   title="Cách chăm sóc khách hàng sau bán hàng dành cho shop mới">
                                                                    <img width={147} height={88}
                                                                         className="lazyload dt-width-100"
                                                                         src="https://file.hstatic.net/200000472237/file/147x88_3e59f6253f434037ba03f25af5ed6755.jpg"
                                                                         data-src="//file.hstatic.net/200000472237/article/cham-soc-khach-hang-sau-ban_db55e55951524555a67ace5578695766_medium.jpg"
                                                                         alt="Cách chăm sóc khách hàng sau bán hàng dành cho shop mới"/>
                                                                </a>
                                                            </div>
                                                            <div className="blog-detail">
                                                                <h3>
                                                                    <a href="/blogs/tip-ban-hang/cach-cham-soc-khach-hang-sau-ban-hang-danh-cho-shop-moi"
                                                                       title="Cách chăm sóc khách hàng sau bán hàng dành cho shop mới">
                                                                        Cách chăm sóc khách hàng sau bán hàng dành cho
                                                                        shop mới
                                                                    </a>
                                                                </h3>
                                                                <span className="date">
                                    <i className="fa fa-calendar"/> 23/10/2023
                                  </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col sm-12">
                                                        <div className="blog-item clearfix">
                                                            <div className="blog-img">
                                                                <a href="/blogs/tip-ban-hang/huong-dan-shop-cach-danh-gia-su-hai-long-cua-khach-hang"
                                                                   title="Hướng dẫn shop cách đánh giá sự hài lòng của khách hàng">
                                                                    <img width={147} height={88}
                                                                         className="lazyload dt-width-100"
                                                                         src="https://file.hstatic.net/200000472237/file/147x88_3e59f6253f434037ba03f25af5ed6755.jpg"
                                                                         data-src="//file.hstatic.net/200000472237/article/danh-gia-muc-do-hai-long-cua-khach-hang_86cd26729b9849b79f3efc080fc69648_medium.png"
                                                                         alt="Hướng dẫn shop cách đánh giá sự hài lòng của khách hàng"/>
                                                                </a>
                                                            </div>
                                                            <div className="blog-detail">
                                                                <h3>
                                                                    <a href="/blogs/tip-ban-hang/huong-dan-shop-cach-danh-gia-su-hai-long-cua-khach-hang"
                                                                       title="Hướng dẫn shop cách đánh giá sự hài lòng của khách hàng">
                                                                        Hướng dẫn shop cách đánh giá sự hài lòng của
                                                                        khách hàng
                                                                    </a>
                                                                </h3>
                                                                <span className="date">
                                    <i className="fa fa-calendar"/> 23/10/2023
                                  </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col sm-12">
                                                        <div className="blog-item clearfix">
                                                            <div className="blog-img">
                                                                <a href="/blogs/tip-ban-hang/bat-mi-cach-tao-ma-giam-gia-tren-shopee-tang-ty-le-chot-don"
                                                                   title="Bật mí cách tạo mã giảm giá trên Shopee tăng tỷ lệ chốt đơn">
                                                                    <img width={147} height={88}
                                                                         className="lazyload dt-width-100"
                                                                         src="https://file.hstatic.net/200000472237/file/147x88_3e59f6253f434037ba03f25af5ed6755.jpg"
                                                                         data-src="//file.hstatic.net/200000472237/article/cach-tao-ma-giam-gia-shopee_3e56f40178a34bc9b6d83deb86a12ab1_medium.png"
                                                                         alt="Bật mí cách tạo mã giảm giá trên Shopee tăng tỷ lệ chốt đơn"/>
                                                                </a>
                                                            </div>
                                                            <div className="blog-detail">
                                                                <h3>
                                                                    <a href="/blogs/tip-ban-hang/bat-mi-cach-tao-ma-giam-gia-tren-shopee-tang-ty-le-chot-don"
                                                                       title="Bật mí cách tạo mã giảm giá trên Shopee tăng tỷ lệ chốt đơn">
                                                                        Bật mí cách tạo mã giảm giá trên Shopee tăng tỷ
                                                                        lệ chốt đơn
                                                                    </a>
                                                                </h3>
                                                                <span className="date">
                                    <i className="fa fa-calendar"/> 23/10/2023
                                  </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col sm-12">
                                                        <div className="blog-item clearfix">
                                                            <div className="blog-img">
                                                                <a href="/blogs/tip-ban-hang/cap-nhat-kich-thuoc-anh-shopee-va-meo-giup-gian-hang-noi-bat"
                                                                   title="Cập nhật kích thước ảnh Shopee và mẹo giúp gian hàng nổi bật">
                                                                    <img width={147} height={88}
                                                                         className="lazyload dt-width-100"
                                                                         src="https://file.hstatic.net/200000472237/file/147x88_3e59f6253f434037ba03f25af5ed6755.jpg"
                                                                         data-src="//file.hstatic.net/200000472237/article/kich-thuoc-banner-shopee_19ce0258f90c47e79600f88d7f380103_medium.jpeg"
                                                                         alt="Cập nhật kích thước ảnh Shopee và mẹo giúp gian hàng nổi bật"/>
                                                                </a>
                                                            </div>
                                                            <div className="blog-detail">
                                                                <h3>
                                                                    <a href="/blogs/tip-ban-hang/cap-nhat-kich-thuoc-anh-shopee-va-meo-giup-gian-hang-noi-bat"
                                                                       title="Cập nhật kích thước ảnh Shopee và mẹo giúp gian hàng nổi bật">
                                                                        Cập nhật kích thước ảnh Shopee và mẹo giúp gian
                                                                        hàng nổi bật
                                                                    </a>
                                                                </h3>
                                                                <span className="date">
                                    <i className="fa fa-calendar"/> 23/10/2023
                                  </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col sm-12">
                                                        <div className="blog-item clearfix">
                                                            <div className="blog-img">
                                                                <a href="/blogs/tip-ban-hang/cach-dat-ten-san-pham-shopee-chuan-seo-toi-uu-tim-kiem-thu-hut-khach"
                                                                   title="Cách đặt tên sản phẩm Shopee chuẩn SEO tối ưu tìm kiếm, thu hút khách">
                                                                    <img width={147} height={88}
                                                                         className="lazyload dt-width-100"
                                                                         src="https://file.hstatic.net/200000472237/file/147x88_3e59f6253f434037ba03f25af5ed6755.jpg"
                                                                         data-src="//file.hstatic.net/200000472237/article/dat-ten-san-pham-shopee_1a69ad8f5beb4cdab7905d7de335eee1_medium.jpg"
                                                                         alt="Cách đặt tên sản phẩm Shopee chuẩn SEO tối ưu tìm kiếm, thu hút khách"/>
                                                                </a>
                                                            </div>
                                                            <div className="blog-detail">
                                                                <h3>
                                                                    <a href="/blogs/tip-ban-hang/cach-dat-ten-san-pham-shopee-chuan-seo-toi-uu-tim-kiem-thu-hut-khach"
                                                                       title="Cách đặt tên sản phẩm Shopee chuẩn SEO tối ưu tìm kiếm, thu hút khách">
                                                                        Cách đặt tên sản phẩm Shopee chuẩn SEO tối ưu
                                                                        tìm kiếm, thu hút khách
                                                                    </a>
                                                                </h3>
                                                                <span className="date">
                                    <i className="fa fa-calendar"/> 23/10/2023
                                  </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section section-partner">
                                <div className="container">
                                    <div className="s-content">
                                        <div className="slide-partner-owl owl-carousel owl-theme d-flex-owl" data-md={6}
                                             data-sm={4} data-xs={3}>
                                            <div className="item-partner item-owl">
                                                <a href="javascript:void(0);">
                                                    <img className="lazyload dt-width-100" width={240} height={45}
                                                         src="https://file.hstatic.net/200000472237/file/240x45_76f5399a31414690abc5080ec3aa7c5f.jpg"
                                                         data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_partner1_medium.png?v=550"
                                                         alt="Juno"/>
                                                </a>
                                            </div>
                                            <div className="item-partner item-owl">
                                                <a href="javascript:void(0);">
                                                    <img className="lazyload dt-width-100" width={240} height={45}
                                                         src="https://file.hstatic.net/200000472237/file/240x45_76f5399a31414690abc5080ec3aa7c5f.jpg"
                                                         data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_partner2_medium.png?v=550"
                                                         alt="Tiki"/>
                                                </a>
                                            </div>
                                            <div className="item-partner item-owl">
                                                <a href="javascript:void(0);">
                                                    <img className="lazyload dt-width-100" width={240} height={45}
                                                         src="https://file.hstatic.net/200000472237/file/240x45_76f5399a31414690abc5080ec3aa7c5f.jpg"
                                                         data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_partner3_medium.png?v=550"
                                                         alt="Lazada"/>
                                                </a>
                                            </div>
                                            <div className="item-partner item-owl">
                                                <a href="javascript:void(0);">
                                                    <img className="lazyload dt-width-100" width={240} height={45}
                                                         src="https://file.hstatic.net/200000472237/file/240x45_76f5399a31414690abc5080ec3aa7c5f.jpg"
                                                         data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_partner4_medium.png?v=550"
                                                         alt="Sendo"/>
                                                </a>
                                            </div>
                                            <div className="item-partner item-owl">
                                                <a href="javascript:void(0);">
                                                    <img className="lazyload dt-width-100" width={240} height={45}
                                                         src="https://file.hstatic.net/200000472237/file/240x45_76f5399a31414690abc5080ec3aa7c5f.jpg"
                                                         data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_partner5_medium.png?v=550"
                                                         alt="Haravan"/>
                                                </a>
                                            </div>
                                            <div className="item-partner item-owl">
                                                <a href="javascript:void(0);">
                                                    <img className="lazyload dt-width-100" width={240} height={45}
                                                         src="https://file.hstatic.net/200000472237/file/240x45_76f5399a31414690abc5080ec3aa7c5f.jpg"
                                                         data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_partner6_medium.png?v=550"
                                                         alt="Shopee"/>
                                                </a>
                                            </div>
                                            <div className="item-partner item-owl">
                                                <a href="javascript:void(0);">
                                                    <img className="lazyload dt-width-100" width={240} height={45}
                                                         src="https://file.hstatic.net/200000472237/file/240x45_76f5399a31414690abc5080ec3aa7c5f.jpg"
                                                         data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_partner7_medium.png?v=550"
                                                         alt="Tiki"/>
                                                </a>
                                            </div>
                                            <div className="item-partner item-owl">
                                                <a href="javascript:void(0);">
                                                    <img className="lazyload dt-width-100" width={240} height={45}
                                                         src="https://file.hstatic.net/200000472237/file/240x45_76f5399a31414690abc5080ec3aa7c5f.jpg"
                                                         data-src="//theme.hstatic.net/200000472237/1001083717/14/logo_partner8_medium.png?v=550"
                                                         alt="Vinamilk"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="categories-faq">
                                <ul className="list">
                                    <li className="category">
                                        <a href="https://ghn.vn/blogs/he-thong-buu-cuc" target="_blank">
                                            <div className="category-ic">
                                                <img width={22} height={22}
                                                     src="//theme.hstatic.net/200000472237/1001083717/14/faq1_icon.png?v=550"
                                                     alt="Hệ thống bưu cục"/>
                                            </div>
                                            <span>Hệ thống bưu cục</span>
                                        </a>
                                    </li>
                                    <li className="category">
                                        <a href="https://ghn.vn/pages/chinh-sach-boi-thuong-cua-ghn" target="_blank">
                                            <div className="category-ic">
                                                <img width={22} height={22}
                                                     src="//theme.hstatic.net/200000472237/1001083717/14/faq2_icon.png?v=550"
                                                     alt="Chính sách bồi thường"/>
                                            </div>
                                            <span>Chính sách bồi thường</span>
                                        </a>
                                    </li>
                                    <li className="category">
                                        <a href="https://ghn.vn/pages/hang-hoa-ghn-khong-nhan-van-chuyen"
                                           target="_blank">
                                            <div className="category-ic">
                                                <img width={22} height={22}
                                                     src="//theme.hstatic.net/200000472237/1001083717/14/faq3_icon.png?v=550"
                                                     alt="Hàng hoá không vận chuyển"/>
                                            </div>
                                            <span>Hàng hoá không vận chuyển</span>
                                        </a>
                                    </li>
                                    <li className="category">
                                        <a href="https://ghn.vn/pages/quy-dinh-ve-khieu-nai-cua-ghn" target="_blank">
                                            <div className="category-ic">
                                                <img width={22} height={22}
                                                     src="//theme.hstatic.net/200000472237/1001083717/14/faq4_icon.png?v=550"
                                                     alt="Quy định về khiếu nại"/>
                                            </div>
                                            <span>Quy định về khiếu nại</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </main>
                        <footer id="footer" className="footer">
                            <div className="footer-center mobile hidden-lg hidden-md hidden-sm">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12 col-lg">
                                            <div className="footer-col">
                                                <div className="line-footer footer-title">
                                                    <div className="logo-footer">
                                                        <img width={60} height={40}
                                                             src="//theme.hstatic.net/200000472237/1001083717/14/logo-footer_small.png?v=550"
                                                             alt="Giao hàng nhanh"/>
                                                    </div>
                                                    <h4>TRẢI NGHIỆM TỐT HƠN VỚI <br/> APP GIAOHANGNHANH</h4>
                                                </div>
                                                <div className="footer-content toggle-footer">
                                                    <div className="line-footer">
                                                        <a href="https://apps.apple.com/us/app/ghn-express-giao-h%C3%A0ng-nhanh/id1203171490"
                                                           className="logo-app">
                                                            <img className="lazyload" width={135} height={40}
                                                                 data-src="https://file.hstatic.net/1000376681/file/icon_app_store_82f9b10bf8d14389bb8c27ec885aceed.svg"
                                                                 alt="App store"/>
                                                        </a>
                                                        <a href="https://play.google.com/store/apps/details?id=vn.ghn.app.giaohangnhanh"
                                                           className="logo-app">
                                                            <img className="lazyload" width={135} height={40}
                                                                 data-src="https://file.hstatic.net/1000376681/file/ico_google_play_f448c837674141469d3a903348361c5b.svg"
                                                                 alt="Google CHPlay"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 col-lg">
                                            <div className="footer-col footer-social">
                                                <h4 className="footer-title">KẾT NỐI VỚI GHN</h4>
                                                <div className="footer-content toggle-footer">
                                                    <div className="list-social">
                                                        <a href="https://www.facebook.com/GHNExpress/"
                                                           className="ico ic-faccbook">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                                                 id="Capa_1" x="0px" y="0px" width="96.124px"
                                                                 height="96.123px" viewBox="0 0 96.124 96.123"
                                                                 style={{enableBackground: 'new 0 0 96.124 96.123'}}
                                                                 xmlSpace="preserve">
                                                                <g>
                                                                    <path
                                                                        d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
                                                                </g>
                                                            </svg>
                                                        </a>
                                                        <a href="https://www.instagram.com/ghnexpress/"
                                                           className="ico ic-instagram">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                                                 id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"
                                                                 style={{enableBackground: 'new 0 0 512 512'}}
                                                                 xmlSpace="preserve">
                                                                <g>
                                                                    <g>
                                                                        <path
                                                                            d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160 C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48 h192c61.76,0,112,50.24,112,112V352z"/>
                                                                    </g>
                                                                </g>
                                                                <g>
                                                                    <g>
                                                                        <path
                                                                            d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336 c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
                                                                    </g>
                                                                </g>
                                                                <g>
                                                                    <g>
                                                                        <circle cx="393.6" cy="118.4" r="17.056"/>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </a>
                                                        <a href="https://www.youtube.com/channel/UC41RMKT4CYK9LXXKtYPKD1w"
                                                           className="ico ic-youtube">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                                                 id="Layer_1" x="0px" y="0px" viewBox="0 0 310 310"
                                                                 style={{enableBackground: 'new 0 0 310 310'}}
                                                                 xmlSpace="preserve">
                                                                <g id="XMLID_822_">
                                                                    <path id="XMLID_823_"
                                                                          d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938 C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527 C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991 c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764 c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861 C204.394,157.263,202.325,160.684,199.021,162.41z"/>
                                                                </g>
                                                            </svg>
                                                        </a>
                                                        <a href="https://www.linkedin.com/company/2721159"
                                                           className="ico ic-linked">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                                                 id="Capa_1" x="0px" y="0px" width="430.117px"
                                                                 height="430.117px" viewBox="0 0 430.117 430.117"
                                                                 style={{enableBackground: 'new 0 0 430.117 430.117'}}
                                                                 xmlSpace="preserve">
                                                                <g>
                                                                    <path id="LinkedIn"
                                                                          d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"/>
                                                                </g>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-lg">
                                            <div className="footer-col">
                                                <h4 className="footer-title">HỆ THỐNG BƯU CỤC GHN</h4>
                                                <div className="footer-content toggle-footer">
                                                    <a href="https://ghn.vn/blogs/he-thong-buu-cuc" className="button">Tìm
                                                        địa chỉ gần bạn</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-lg">
                                            <div className="footer-col">
                                                <h4 className="footer-title">ĐĂNG KÝ NHẬN TIN MỚI</h4>
                                                <div className="footer-content toggle-footer">
                                                    <div className="content-newsletter">
                                                        <div className="form-newsletter">
                                                            <form acceptCharset="UTF-8" action="/account/contact"
                                                                  className="contact-form" method="post">
                                                                <input name="form_type" type="hidden"
                                                                       defaultValue="customer"/>
                                                                <input name="utf8" type="hidden" defaultValue="✓"/>
                                                                <div className="form-group">
                                                                    <input type="hidden" id="contact_tags"
                                                                           name="contact[tags]"
                                                                           defaultValue="khách hàng tiềm năng, bản tin"/>
                                                                    <input required type="email" defaultValue
                                                                           placeholder="Vui lòng nhập email của bạn..."
                                                                           name="contact[email]"
                                                                           aria-label="Email Address"
                                                                           className="inputNew form-control grey newsletter-input"/>
                                                                    <button type="submit"
                                                                            className="button submitNewsletter">
                                                                        <span>Gửi</span></button>
                                                                </div>
                                                                <input id="4544ef62f95146909c72e26da40a9d54"
                                                                       name="g-recaptcha-response"
                                                                       type="hidden"/>{/**/}{/**/}</form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-top">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6 col-xs-12 col-lg">
                                            <div className="footer-col">
                                                <h4 className="footer-title">
                                                    CÔNG TY CỔ PHẦN DỊCH VỤ GIAO HÀNG NHANH
                                                </h4>
                                                <div className="footer-content toggle-footer">
                                                    <p>Công ty giao nhận đầu tiên tại Việt Nam được thành lập với sứ
                                                        mệnh phục vụ nhu cầu vận chuyển chuyên nghiệp của các đối tác
                                                        Thương mại điện tử trên toàn quốc.
                                                        <br/>Giấy CNĐKDN số 0311907295 do Sở Kế Hoạch và Đầu Tư TP HCM
                                                        cấp lần đầu ngày 02/08/2012, cấp thay đổi lần thứ 19: ngày
                                                        12/11/2020.
                                                        <br/>Giấy phép bưu chính số 310/GP-BTTTT do Bộ Thông tin và
                                                        Truyền thông cấp lần đầu ngày 19/11/2014, cấp điều chỉnh lần thứ
                                                        2: ngày 02/08/2019.
                                                        <br/>Văn bản xác nhận thông báo hoạt động bưu chính số
                                                        2438/XN-BTTTT do Bộ Thông tin và Truyền thông cấp lần đầu ngày
                                                        01/02/2013, cấp điều chỉnh lần thứ 2: ngày 26/07/2019.</p>
                                                    <div className="hr"/>
                                                    <ul>
                                                        <li><b><i className="fa fa-map-marker"/>Trụ sở chính: </b>405/15
                                                            Xô Viết Nghệ Tĩnh, Phường 24, Quận Bình Thạnh, TP HCM
                                                        </li>
                                                        <li><b><i className="fa fa-envelope"/>Email: </b>cskh@ghn.vn
                                                        </li>
                                                        <li><b><i className="fa fa-phone"/>Hotline: </b>1900 636677</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-6 col-xs-12 col-lg">
                                            <div className="footer-col footer-link">
                                                <h4 className="footer-title">
                                                    VỀ GHN
                                                </h4>
                                                <div className="footer-content toggle-footer">
                                                    <ul>
                                                        <li>
                                                            <a href="/pages/ve-ghn-1" title="Giới thiệu GHN">Giới thiệu
                                                                GHN</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://ghn.vn/blogs/he-thong-buu-cuc"
                                                               title="Hệ thống bưu cục">Hệ thống bưu cục</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pages/cong-nghe-ghn" title="Công Nghệ">Công
                                                                Nghệ</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pages/ghn-xu" title="GHN Xu">GHN Xu</a>
                                                        </li>
                                                        <li>
                                                            <a href="/blogs/tuyen-dung" title="Tuyển dụng">Tuyển
                                                                dụng</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pages/lien-he" title="Liên hệ">Liên hệ</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-xs-12 col-lg">
                                            <div className="footer-col footer-link">
                                                <h4 className="footer-title">
                                                    THÔNG TIN DỊCH VỤ
                                                </h4>
                                                <div className="footer-content toggle-footer">
                                                    <ul>
                                                        <li>
                                                            <a href="/pages/bang-gia-moi-sieu-tiet-kiem"
                                                               title="Bảng giá">Bảng giá</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pages/dich-vu-giao-hang"
                                                               title="Dịch vụ giao hàng">Dịch vụ giao hàng</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pages/quy-trinh-gui-hang"
                                                               title="Quy trình gửi hàng">Quy trình gửi hàng</a>
                                                        </li>
                                                        <li>
                                                            <a href="https://ghn.vn/blogs/tin-tuc-ghn/dich-vu-khai-gia-bao-hiem-hang-hoa-ghn-express"
                                                               title="Khai báo giá trị hàng hóa">Khai báo giá trị hàng
                                                                hóa</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pages/hang-hoa-ghn-khong-nhan-van-chuyen"
                                                               title="Hàng hoá không vận chuyển">Hàng hoá không vận
                                                                chuyển</a>
                                                        </li>
                                                        <li>
                                                            <a href="/blogs/faq" title="Câu hỏi thường gặp">Câu hỏi
                                                                thường gặp</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 col-xs-12 col-lg">
                                            <div className="footer-col footer-link">
                                                <h4 className="footer-title">
                                                    THÔNG TIN
                                                </h4>
                                                <div className="footer-content toggle-footer">
                                                    <ul>
                                                        <li>
                                                            <a href="/pages/chinh-sach-boi-thuong-cua-ghn"
                                                               title="Chính sách bồi thường">Chính sách bồi thường</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pages/quy-dinh-ve-khieu-nai-cua-ghn"
                                                               title="Quy định về khiếu nại">Quy định về khiếu nại</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pages/dieu-khoan-su-dung"
                                                               title="Điều khoản sử dụng">Điều khoản sử dụng</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pages/chinh-sach-bao-mat"
                                                               title="Chính sách bảo mật">Chính sách bảo mật</a>
                                                        </li>
                                                        <li>
                                                            <a href="/blogs/tin-tuc-ghn" title="Tin tức GHN">Tin tức
                                                                GHN</a>
                                                        </li>
                                                        <li>
                                                            <a href="/blogs/khuyen-mai" title="Khuyến mãi">Khuyến
                                                                mãi</a>
                                                        </li>
                                                        <li>
                                                            <a href="/blogs/thong-tin-giao-hang"
                                                               title="Kiến thức giao hàng">Kiến thức giao hàng</a>
                                                        </li>
                                                        <li>
                                                            <a href="/blogs/tip-ban-hang" title="Tip bán hàng">Tip bán
                                                                hàng</a>
                                                        </li>
                                                        <li>
                                                            <a href="/blogs/chien-binh-ghn" title="Chiến binh GHN">Chiến
                                                                binh GHN</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-center desktop hidden-xs">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12 col-lg">
                                            <div className="footer-col">
                                                <div className="line-footer footer-title">
                                                    <div className="logo-footer">
                                                        <img width={60} height={40}
                                                             src="//theme.hstatic.net/200000472237/1001083717/14/logo-footer_small.png?v=550"
                                                             alt="Giao hàng nhanh"/>
                                                    </div>
                                                    <h4>TRẢI NGHIỆM TỐT HƠN VỚI <br/> APP GIAOHANGNHANH</h4>
                                                </div>
                                                <div className="footer-content toggle-footer">
                                                    <div className="line-footer">
                                                        <a href="https://apps.apple.com/us/app/ghn-express-giao-h%C3%A0ng-nhanh/id1203171490"
                                                           className="logo-app">
                                                            <img className="lazyload" width={135} height={40}
                                                                 data-src="https://file.hstatic.net/1000376681/file/icon_app_store_82f9b10bf8d14389bb8c27ec885aceed.svg"/>
                                                        </a>
                                                        <a href="https://play.google.com/store/apps/details?id=vn.ghn.app.giaohangnhanh"
                                                           className="logo-app">
                                                            <img className="lazyload" width={135} height={40}
                                                                 data-src="https://file.hstatic.net/1000376681/file/ico_google_play_f448c837674141469d3a903348361c5b.svg"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 col-lg">
                                            <div className="footer-col footer-social">
                                                <h4 className="footer-title">KẾT NỐI VỚI GHN</h4>
                                                <div className="footer-content toggle-footer">
                                                    <div className="list-social">
                                                        <a href="https://www.facebook.com/GHNExpress/"
                                                           className="ico ic-faccbook">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                                                 id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512"
                                                                 style={{enableBackground: 'new 0 0 512 512'}}
                                                                 xmlSpace="preserve">
                                                                <path style={{fill: '#385C8E'}}
                                                                      d="M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159  c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44  c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0  c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0  c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258  v83.975C126.683,268.993,130.379,272.691,134.941,272.691z"/>
                                                            </svg>
                                                        </a>
                                                        <a href="https://www.instagram.com/ghnexpress/"
                                                           className="ico ic-instagram">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                                                 id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"
                                                                 style={{enableBackground: 'new 0 0 512 512'}}
                                                                 xmlSpace="preserve">
                                                                <g>
                                                                    <g>
                                                                        <path
                                                                            d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160    C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48    h192c61.76,0,112,50.24,112,112V352z"/>
                                                                    </g>
                                                                </g>
                                                                <g>
                                                                    <g>
                                                                        <path
                                                                            d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336    c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
                                                                    </g>
                                                                </g>
                                                                <g>
                                                                    <g>
                                                                        <circle cx="393.6" cy="118.4" r="17.056"/>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </a>
                                                        <a href="https://www.youtube.com/channel/UC41RMKT4CYK9LXXKtYPKD1w"
                                                           className="ico ic-youtube">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                                                 id="Layer_1" x="0px" y="0px"
                                                                 viewBox="0 0 461.001 461.001"
                                                                 style={{enableBackground: 'new 0 0 461.001 461.001'}}
                                                                 xmlSpace="preserve">
                                                                <path style={{fill: '#F61C0D'}}
                                                                      d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728  c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137  C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607  c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                                                            </svg>
                                                        </a>
                                                        <a href="https://www.linkedin.com/company/2721159"
                                                           className="ico ic-linked">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                                                                 id="Capa_1" x="0px" y="0px" width="430.117px"
                                                                 height="430.117px" viewBox="0 0 430.117 430.117"
                                                                 style={{enableBackground: 'new 0 0 430.117 430.117'}}
                                                                 xmlSpace="preserve">
                                                                <g>
                                                                    <path id="LinkedIn"
                                                                          d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z"/>
                                                                </g>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-lg">
                                            <div className="footer-col">
                                                <h4 className="footer-title">HỆ THỐNG BƯU CỤC GHN</h4>
                                                <div className="footer-content toggle-footer">
                                                    <a href="https://ghn.vn/blogs/he-thong-buu-cuc" className="button">Tìm
                                                        địa chỉ gần bạn</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-lg">
                                            <div className="footer-col">
                                                <h4 className="footer-title">ĐĂNG KÝ NHẬN TIN MỚI</h4>
                                                <div className="footer-content toggle-footer">
                                                    <div className="content-newsletter">
                                                        <div className="form-newsletter">
                                                            <form acceptCharset="UTF-8" action="/account/contact"
                                                                  className="contact-form" method="post">
                                                                <input name="form_type" type="hidden"
                                                                       defaultValue="customer"/>
                                                                <input name="utf8" type="hidden" defaultValue="✓"/>
                                                                <div className="form-group">
                                                                    <input type="hidden" id="contact_tags"
                                                                           name="contact[tags]"
                                                                           defaultValue="khách hàng tiềm năng, bản tin"/>
                                                                    <input required type="email" defaultValue
                                                                           placeholder="Vui lòng nhập email của bạn..."
                                                                           name="contact[email]"
                                                                           aria-label="Email Address"
                                                                           className="inputNew form-control grey newsletter-input"/>
                                                                    <button type="submit"
                                                                            className="button submitNewsletter">
                                                                        <span>Gửi</span></button>
                                                                </div>
                                                                <input id="5a05491d7b0249798c9c80272e8cdd41"
                                                                       name="g-recaptcha-response"
                                                                       type="hidden"/>{/**/}{/**/}</form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12 col-left">
                                            <p>Bản quyền thuộc về Giao Hàng Nhanh © 2019</p>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12 col-right">
                                            <p>Powered by
                                                <a href="https://www.haravan.com/" target="blank">Haravan
                                                    Enterprise. </a>
                                                <a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=45081"
                                                   className="logo-cn">
                                                    <img className="lazyload" width={92} height={35}
                                                         data-src="//theme.hstatic.net/200000472237/1001083717/14/logo-bct.png?v=550"
                                                         alt="Bộ công thương"/>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                        <a id="back-to-top" href="javascript:void(0);">
                            <span className="btt-line"/>
                            <span className="btt-text">Top</span>
                        </a>
                    </div>
                </div>
                <div id="site-overlay" className="site-overlay"/>
                <nav id="menu-sidebar">
                </nav>
            </div>
            <div id="popupnotify" className="popupnotify">
                <div className="overlay-popup"/>
                <div className="popup-notify-content-w">
                    <div className="popup-notify-content">
                        <a href="https://www.facebook.com/GHNExpress">
                            <span className="close-popup-notify">×</span>
                            <img className="dt-width-auto lazyload"
                                 data-src="https://file.hstatic.net/200000472237/file/640x320_9f52214c67974ca5b4e16d14d59e5497.png"
                                 data-mobile="https://file.hstatic.net/200000472237/file/788x600_85d25f013a6e41b2aba6bfae720e9972.png"
                                 width={640} height={320} alt="KXA"/>
                        </a>
                    </div>
                </div>
            </div>
            <style
                dangerouslySetInnerHTML={{__html: "\n\t.popupnotify {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tz-index: 9999;\n\t\ttransition: all .5s;\n\t\tdisplay: none;\n\t}\n\t.popupnotify.show {display: block;}\n\t.popupnotify .popup-notify-content-w {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\t-webkit-transform: translateY(-50%);\n\t\t-moz-transform: translateY(-50%);\n\t\t-ms-transform: translateY(-50%);\n\t\tdisplay: inline-block;\n\t\ttext-align: center;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tmargin: auto; \n\t\tz-index: 10;\n\t\twidth: fit-content;\n\t}\n\t.popupnotify .popup-notify-content a {position: relative;display:inline-block;}\n\t.popupnotify .popup-notify-content img {margin: auto;}\n\t.popupnotify .popup-notify-content-w:after {content: \"\";display: table;clear: both; }\n\t.popupnotify .overlay-popup {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tz-index: 1;\n\t\tbackground: rgba(0, 0, 0, 0.8);\n\t\ttransition: all .5s; \n\t\tcursor: pointer;\n\t}\n\t.popupnotify .popup-notify-content {\n\t\tposition: relative;\n\t\twidth: fit-content;\n\t\tmargin: auto;\n\t}\n\t@media (min-width: 768px) {\n\t\t//.popupnotify .popup-notify-content-w {max-width: 500px;}\n\t\t//.popupnotify .popup-notify-content {max-width: 500px;margin: auto; } \n\t}\n\t@media (max-width: 767px) {\n\t\t.popupnotify .popup-notify-content-w {width: 100%;}\n\t\t.popupnotify .popup-notify-content {width: 100%;padding: 0 15px; } \n\t}\n\t.popupnotify .close-popup-notify {\n\t\tposition: absolute;\n\t\tright: 5px;\n\t\ttop: 5px;\n\t\tdisplay: inline-block;\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\tbackground: #000;\n\t\tcolor: #fff;\n\t\tborder-radius: 50%;\n\t\ttext-align: center;\n\t\tline-height: 24px;\n\t\tcursor: pointer; \n\t}\n\t@media (max-width: 767px) {\n\t\t.popupnotify .close-popup-notify {right: 20px; } \n\t}\n\t.popupnotify .close-popup-notify:hover {opacity: 0.8; }\n\n"}}/>
            <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MR56PS4" height="0" width="0"
                style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
            <div className="flexsearchui">
                <div className="searchmobileui">
            <span className="searchmobileui_1">
              <img width={18} height={18}
                   src="https://file.hstatic.net/200000472237/file/magnifying-glass_6d4822617ce044adb1692a007e9f1f9b_icon.png"
                   alt="search-ui"/>
            </span>
                    <span>
              Tra cứu
            </span>
                </div>
                <div className="autologon">
            <span>
              <img width={20} height={21}
                   src="https://file.hstatic.net/200000472237/file/user_e3ef14a6dff04acaa81d11359fa306af.png"
                   alt="user"/>
            </span>
                    <span>
                        Đăng nhập
            </span>
                </div>
            </div>
            <form className="form-inline thefor">
                <div className="relativem">
                    <div className="form-group">
                        <input required name="code" maxLength={40} autoComplete="off" className="stemple" type="text"
                               size={20} placeholder="Nhập mã đơn hàng bạn cần tra cứu..."/>
                    </div>
                    <button type="submit" className="btn btn-default">
                        <svg width={20} height={20} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width={40} height={40} transform="matrix(-1 0 0 1 40 0)" fill="url(#pattern0)"/>
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                                    <use xlinkHref="#image0_9_47" transform="scale(0.00195312)"/>
                                </pattern>
                                <image id="image0_9_47" width={512} height={512}
                                       xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAADusAAA7rAEEU88NAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMS0wNVQxNDoyNDo0MyswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDEtMDVUMTQ6Mjc6MjYrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDEtMDVUMTQ6Mjc6MjYrMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVjNGJkMTZhLTdlNmItNDQ0Zi1hNWU2LTZlODg0MjUxYzVjYiIgeG1wTU06RG9jdW1lbnRJRD0i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"/>
                            </defs>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Home;