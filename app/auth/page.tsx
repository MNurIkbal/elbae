
import '@/public/assets/css/auth/bootstrap.min.css'
import '@/public/assets/css/auth/style.css'
import Image from 'next/image'
import Link from 'next/link'
import ScriptLoader from '../components/layout/ScriptLoader';
export default function Auth() {
    return (
        <>
            <div className="body-overlay" />
            <button
                type="button"
                className="theme-customization__button w-48-px h-48-px bg-primary-600 text-white rounded-circle d-flex justify-content-center align-items-center position-fixed end-0 bottom-0 mb-40 me-40 text-2xxl bg-hover-primary-700"
            >
                <i className="ri-settings-3-line animate-spin" />
            </button>
            <div className="theme-customization-sidebar w-100 bg-base h-100vh overflow-y-auto position-fixed end-0 top-0 shadow-lg">
                <div className="d-flex align-items-center gap-3 py-16 px-24 justify-content-between border-bottom">
                    <div>
                        <h6 className="text-sm dark:text-white">Theme Settings</h6>
                        <p className="text-xs mb-0 text-neutral-500 dark:text-neutral-200">
                            Customize and preview instantly
                        </p>
                    </div>
                    <button data-slot="button"
                        className="theme-customization-sidebar__close text-neutral-900 bg-transparent text-hover-primary-600 d-flex text-xl"
                    >
                        <i className="ri-close-fill" />
                    </button>
                </div>
                <div className="d-flex flex-column gap-48 p-24 overflow-y-auto flex-grow-1">
                    <div className="theme-setting-item">
                        <h6 className="fw-medium text-primary-light text-md mb-3">
                            Theme Mode
                        </h6>
                        <div className="d-grid grid-cols-3 gap-3 dark-light-mode">
                            <button
                                type="button"
                                className="theme-btn theme-setting-item__btn d-flex align-items-center justify-content-center h-64-px rounded-3 text-xl active"
                                data-theme="light"
                            >
                                <i className="ri-sun-line" />
                            </button>
                            <button
                                type="button"
                                className="theme-btn theme-setting-item__btn d-flex align-items-center justify-content-center h-64-px rounded-3 text-xl"
                                data-theme="dark"
                            >
                                <i className="ri-moon-line" />
                            </button>
                            <button
                                type="button"
                                className="theme-btn theme-setting-item__btn d-flex align-items-center justify-content-center h-64-px rounded-3 text-xl"
                                data-theme="system"
                            >
                                <i className="ri-computer-line" />
                            </button>
                        </div>
                    </div>
                    <div className="theme-setting-item">
                        <h6 className="fw-medium text-primary-light text-md mb-3">
                            Page Direction
                        </h6>
                        <div className="d-grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="theme-setting-item__btn ltr-mode-btn d-flex align-items-center justify-content-center gap-2 h-56-px rounded-3 text-xl"
                            >
                                <span>
                                    <i className="ri-align-item-left-line" />
                                </span>
                                <span className="h6 text-sm font-medium mb-0">LTR</span>
                            </button>
                            <button
                                type="button"
                                className="theme-setting-item__btn rtl-mode-btn d-flex align-items-center justify-content-center gap-2 h-56-px rounded-3 text-xl"
                            >
                                <span className="h6 text-sm font-medium mb-0">RTL</span>
                                <span>
                                    <i className="ri-align-item-right-line" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="theme-setting-item">
                        <h6 className="fw-medium text-primary-light text-md mb-3">
                            Color Schema
                        </h6>
                        <div className="d-grid grid-cols-3 gap-3">
                            <button
                                type="button"
                                className="color-picker-btn d-flex flex-column justify-content-center align-items-center"
                                data-color="blue"
                            >
                                <span
                                    className="color-picker-btn__box h-40-px w-100 rounded-3"
                                    style={{ backgroundColor: "#2563eb" }}
                                />
                                <span className="fw-medium mt-1" style={{ color: "#2563eb" }}>
                                    Blue
                                </span>
                            </button>
                            <button
                                type="button"
                                className="color-picker-btn d-flex flex-column justify-content-center align-items-center"
                                data-color="red"
                            >
                                <span
                                    className="color-picker-btn__box h-40-px w-100 rounded-3"
                                    style={{ backgroundColor: "#dc2626" }}
                                />
                                <span className="fw-medium mt-1" style={{ color: "#dc2626" }}>
                                    Red
                                </span>
                            </button>
                            <button
                                type="button"
                                className="color-picker-btn d-flex flex-column justify-content-center align-items-center"
                                data-color="green"
                            >
                                <span
                                    className="color-picker-btn__box h-40-px w-100 rounded-3"
                                    style={{ backgroundColor: "#16a34a" }}
                                />
                                <span className="fw-medium mt-1" style={{ color: "#16a34a" }}>
                                    Green
                                </span>
                            </button>
                            <button
                                type="button"
                                className="color-picker-btn d-flex flex-column justify-content-center align-items-center"
                                data-color="yellow"
                            >
                                <span
                                    className="color-picker-btn__box h-40-px w-100 rounded-3"
                                    style={{ backgroundColor: "#ff9f29" }}
                                />
                                <span className="fw-medium mt-1" style={{ color: "#ff9f29" }}>
                                    Yellow
                                </span>
                            </button>
                            <button
                                type="button"
                                className="color-picker-btn d-flex flex-column justify-content-center align-items-center"
                                data-color="cyan"
                            >
                                <span
                                    className="color-picker-btn__box h-40-px w-100 rounded-3"
                                    style={{ backgroundColor: "#00b8f2" }}
                                />
                                <span className="fw-medium mt-1" style={{ color: "#00b8f2" }}>
                                    Cyan
                                </span>
                            </button>
                            <button
                                type="button"
                                className="color-picker-btn d-flex flex-column justify-content-center align-items-center"
                                data-color="violet"
                            >
                                <span
                                    className="color-picker-btn__box h-40-px w-100 rounded-3"
                                    style={{ backgroundColor: "#7c3aed" }}
                                />
                                <span className="fw-medium mt-1" style={{ color: "#7c3aed" }}>
                                    Violet
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="auth bg-base d-flex flex-wrap">
                <div className="auth-left d-lg-block d-none">
                    <div className="d-flex align-items-center flex-column h-100 justify-content-center">
                        <Image src="/assets/img/auth-img.png"  width={700} height={300} alt="" />
                    </div>
                </div>
                <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
                    <div className="max-w-464-px mx-auto w-100">
                        <div>
                            <Link href="/" className="mb-40 max-w-290-px">
                                <Image  src="/assets/img/logo.png"  alt="" width={200} height={150} />
                            </Link>
                            <h4 className="mb-12">Sign In to your Account</h4>
                            <p className="mb-32 text-secondary-light text-lg">
                                Welcome back! please enter your detail
                            </p>
                        </div>
                        <form action="#">
                            <div className="icon-field mb-16">
                                <span className="icon top-50 translate-middle-y">
                                    
                                </span>
                                <input
                                    type="email"
                                    className="form-control h-56-px bg-neutral-50 radius-12"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="position-relative mb-20">
                                <div className="icon-field">
                                    <span className="icon top-50 translate-middle-y">
                                        
                                    </span>
                                    <input
                                        type="password"
                                        className="form-control h-56-px bg-neutral-50 radius-12"
                                        id="your-password"
                                        placeholder="Password"
                                    />
                                </div>
                                <span
                                    className="toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
                                    data-toggle="#your-password"
                                />
                            </div>
                            <Link href="/dashboard"
                                type="submit"
                                className="btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32"
                            >
                                
                                Sign In
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
            <ScriptLoader />
        </>

    );
}