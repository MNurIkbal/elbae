"use client";
import Link from "next/link";
import Layout from "../../layout/Layout";
import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { Icon } from "@iconify/react";


export default function DashboardPage() {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const donutChartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const options: ApexCharts.ApexOptions = {
      series: [
        {
          name: "Revenue",
          data: [15000, 18000, 19000, 20000, 35000, 20000, 18000, 13000, 18000, 38000, 14000, 16000],
        },
      ],
      colors: ["#487FFF", "#FF9F29"],
      chart: {
        type: "bar",
        height: 250,
        toolbar: { show: false },
      },
      grid: {
        borderColor: "#D1D5DB",
        strokeDashArray: 4,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: "40%", // ⚠️ harus string di React
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ],
      },
      yaxis: {
        labels: {
          formatter: (val) => val.toLocaleString(),
        },
      },
      fill: { opacity: 1 },
      legend: { show: false },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();



    if (!donutChartRef.current) return;

    const donutOptions: ApexCharts.ApexOptions = {
      series: [30, 25],
      colors: ["#FF9F29", "#487FFF"],
      labels: ["Female", "Male"],
      chart: {
        type: "donut",
        height: 230,
        sparkline: {
          enabled: true, // hilangin whitespace
        },
      },
      legend: {
        show: false,
      },
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    const donutChart = new ApexCharts(
      donutChartRef.current,
      donutOptions
    );

    donutChart.render();

    return () => {
      chart.destroy();
      donutChart.destroy();
    };
  }, []);

  return (
    <>
      <Layout>
        <div className="dashboard-main-body">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6 mt-4">
            <h6 className="font-semibold mb-0 dark:text-white">Dashboard</h6>
            <ul className="flex items-center gap-[6px]">
              <li className="font-medium">
                <a
                  href="index.html"
                  className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 dark:text-white dark:hover:text-primary-600"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-12 2xl:col-span-9">
              <div className="card rounded-lg border-0">
                <div className="grid grid-cols-1 2xl:grid-cols-12">
                  <div className="xl:col-span-12 2xl:col-span-6">
                    <div className="card-body p-6">
                      <div className="flex items-center flex-wrap gap-2 justify-between">
                        <h6 className="mb-2 font-bold text-lg">Grafik Pengarsipan</h6>
                      </div>
                      <div className="mt-[60px]">
                        <div id="paymentStatusChart" className="margin-16-minus" ref={chartRef} />
                      </div>
                    </div>
                  </div>
                  <div className="xl:col-span-12 2xl:col-span-6 2xl:border-l border-neutral-200 dark:border-neutral-600">
                    <div className="grid grid-cols-1 sm:grid-cols-2 border-s-neutral-300">
                      <div className="card-body p-6 h-full flex flex-col border-b sm:border-r border-neutral-200 dark:border-neutral-600">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                          <div>
                            <span className="w-[44px] h-[44px] text-primary-600 dark:text-primary-500 bg-primary-600/20 border border-primary-300 dark:border-primary-600/50 shrink-0 flex justify-center items-center rounded-lg h6 mb-4">
                            <Icon icon="mdi:package-variant" className="menu-icon" />
                            </span>
                            <span className="mb-1 font-medium text-secondary-light text-base">
                              Total Arsip
                            </span>
                            <h6 className="font-semibold text-neutral-900 mt-2 mb-px">
                              300
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-6 h-full flex flex-col border-b border-neutral-200 dark:border-neutral-600">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                          <div>
                            <span className="w-[44px] h-[44px] text-warning-600 dark:text-warning-500 bg-warning-600/20 border border-warning-300 dark:border-warning-600/50 shrink-0 flex justify-center items-center rounded-lg h6 mb-4">
                            <Icon icon="mdi:account" className="menu-icon" />
                            </span>
                            <span className="mb-1 font-medium text-secondary-light text-base">
                              Total User
                            </span>
                            <h6 className="font-semibold text-neutral-900 mt-2 mb-px">
                              50,000
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-6 h-full flex flex-col sm:border-r border-neutral-200 dark:border-neutral-600">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                          <div>
                            <span className="w-[44px] h-[44px] text-purple-600 dark:text-purple-500 bg-purple-600/20 border border-purple-300 dark:border-purple-600/50 shrink-0 flex justify-center items-center rounded-lg h6 mb-4">
                            <Icon icon="mdi:tag" className="menu-icon" />
                            </span>
                            <span className="mb-1 font-medium text-secondary-light text-base">
                              Total Kategori
                            </span>
                            <h6 className="font-semibold text-neutral-900 mt-2 mb-px">
                              1400
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-6 h-full flex flex-col">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                          <div>
                            <span className="w-[44px] h-[44px] text-pink-600 dark:text-pink-500 bg-pink-600/20 border border-pink-300 dark:border-pink-600/50 shrink-0 flex justify-center items-center rounded-lg h6 mb-4">
                            <Icon icon="mdi:account-lock" className="menu-icon" />
                            </span>
                            <span className="mb-1 font-medium text-secondary-light text-base">
                              Total Role
                            </span>
                            <h6 className="font-semibold text-neutral-900 mt-2 mb-px">
                              2
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-12 lg:col-span-6 2xl:col-span-3">
              <div className="card h-full rounded-lg border-0">
                <div className="card-body p-6">
                  <div className="flex items-center flex-wrap gap-2 justify-between">
                    <h6 className="mb-2 font-bold text-lg">Grafik Kategori Pengarsipan</h6>
                  </div>
                  <div className="relative">
                    <span className="w-[80px] h-[80px] bg-white dark:bg-neutral-700 shadow-lg text-neutral-600 dark:text-neutral-200 font-semibold text-xl flex justify-center items-center rounded-full absolute end-0 top-0 z-99999">
                      +30%
                    </span>
                    <div
                      id="statisticsDonutChart" ref={donutChartRef}
                      className="mt-9 grow apexcharts-tooltip-z-none title-style circle-none"
                    />
                    <span className="w-[80px] h-[80px] bg-white dark:bg-neutral-700 shadow-lg text-neutral-600 dark:text-neutral-200 font-semibold text-xl flex justify-center items-center rounded-full absolute start-0 bottom-0 z-1">
                      +25%
                    </span>
                  </div>
                  <ul className="flex flex-wrap items-center justify-between mt-4 gap-3">
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-primary-600" />
                      <span className="text-secondary-light text-sm font-normal">
                        Male:
                        <span className="text-neutral-600 dark:text-neutral-200 font-bold">
                          20,000
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-sm bg-warning-600" />
                      <span className="text-secondary-light text-sm font-normal">
                        Female:
                        <span className="text-neutral-600 dark:text-neutral-200 font-bold">
                          25,000
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <br />
          <div className="xl:col-span-12 lg:col-span-6 2xl:col-span-9">
            <div className="card h-full border-0">
              <div className="card-body p-6">
                <div className="flex items-center flex-wrap gap-2 justify-between mb-5">
                  <h6 className="mb-2 font-bold text-lg">Arsip</h6>
                  <Link
                    href="/arsip"
                    className="text-primary-600 dark:text-primary-600 hover-text-primary flex items-center gap-1"
                  >
                    Lihat Semua
                  </Link>
                </div>
                <div className="table-responsive scroll-sm">
                  <table className="table bordered-table mb-0">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Kategori</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Deskripsi</th>
                        <th scope="col">Status</th>
                        <th scope="col" className="text-center">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          1
                        </td>
                        <td>#6352148</td>
                        <td>iPhone 14 max</td>
                        <td>2</td>
                        <td>$5,000.00</td>
                        <td className="text-center">
                          {" "}
                          <span className="bg-success-100 dark:bg-success-600/25 text-success-600 dark:text-success-400 px-6 py-1.5 rounded-full font-medium text-sm">
                            Paid
                          </span>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>

  )
}