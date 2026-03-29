'use client'
import '@/public/assets/css/auth/bootstrap.min.css'
import '@/public/assets/css/auth/style.css'
import Image from 'next/image'
import Link from 'next/link'
import ScriptLoader from '../../layout/ScriptLoader';
import { Icon } from '@iconify/react';
import { useState } from 'react';
export default function Auth() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="body-overlay" />
            <section className="auth bg-base d-flex flex-wrap">
                <div className="auth-left d-lg-block d-none">
                    <div className="d-flex align-items-center flex-column h-100 justify-content-center">
                        <Image src="/assets/img/auth-img.png" width={700} height={300} alt="" />
                    </div>
                </div>
                <div className="auth-right py-32 px-24 d-flex flex-column justify-content-center">
                    <div className="max-w-464-px mx-auto w-100">
                        <div>
                            <Link href="/" className="mb-40 max-w-290-px">
                                <Image src="/assets/img/logo.png" width={200} height={150} alt="" />
                            </Link>
                            <h4 className="mb-12">Sign In to your Account</h4>
                            <p className="mb-32 text-secondary-light text-lg">
                                Welcome back! please enter your detail
                            </p>
                        </div>
                        <form action="#">
                            <div className="icon-field mb-16">
                                <span className="icon top-50 translate-middle-y">
                                    <Icon icon="mdi:email-outline" className="menu-icon" />
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
                                        <Icon icon="mdi:lock-outline" className="menu-icon" />
                                    </span>
                                    <input
                                        type={show ? "text" : "password"}
                                        className="form-control h-56-px bg-neutral-50 radius-12"
                                        id="your-password"
                                        placeholder="Password"
                                    />
                                </div>
                                <span
                                    onClick={() => setShow(!show)}
                                    className="cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light"
                                >
                                    <i className={show ? "ri-eye-off-line" : "ri-eye-line"}></i>
                                </span>
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