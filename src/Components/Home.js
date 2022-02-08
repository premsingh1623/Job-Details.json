import React from 'react';
import jobList from './joblist.json';
import { useState, useEffect } from 'react';

function Home() {


    const [display, setdisplay] = useState({
        display: "none"
      })
      const openModal = () => {

        setdisplay({
          display: "block"
        })
          }
        const closeModal = () => {
          setdisplay({
            display: "none"
          })
          }
    
    const [Text, setText] = useState(
        jobList.map((e) => {
            return (
                <div className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-8 lg:w-1/3" key={e.id}>

                    <article className="overflow-hidden rounded-lg shadow-lg h-[fit-content]">

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="/">
                                <h1 className="text-lg text-blue-600 font-bold">
                                    {e.Name}
                                </h1>
                            </a>
                            <p className="text-grey-darker text-lg font-bold">
                                $ {e.Salary}
                            </p>
                        </header>

                        <footer className="flex flex-col items-center justify-between leading-none p-2 md:p-4">

                            <p className="ml-2 text-sm  my-12">
                                {e.Description.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={openModal}>
                                    Apply Now
                                </button>
                                <p className="text-blue-600">
                                    Months :  {e.Month}
                                </p>
                            </div>
                        </footer>
                    </article>
                </div>
            )
        })

    );
    const price1 = () => {
        let detail1 = jobList.map((e) => {
            if (e.Salary <= "3000") {
                return (<div className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-8 lg:w-1/3" key={e.id}>

                    <article className="overflow-hidden rounded-lg shadow-lg h-[fit-content]">

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="/">
                                <h1 className="text-lg text-blue-600 font-bold">
                                    {e.Name}
                                </h1>
                            </a>
                            <p className="text-grey-darker text-lg font-bold">
                                $ {e.Salary}
                            </p>
                        </header>

                        <footer className="flex flex-col items-center justify-between leading-none p-2 md:p-4">

                            <p className="ml-2 text-sm  my-12">
                                {e.Description.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={openModal}>
                                    Apply Now
                                </button>
                                <p className="text-blue-600">
                                    Months :  {e.Month}
                                </p>
                            </div>
                        </footer>
                    </article>
                </div>
                )

            } else { }
        })
        setText(detail1);

    }

    const price2 = () => {
        let detail1 = jobList.map((e) => {
            if (e.Salary <= "6000" && e.Salary >= "4000") {
                return (<div className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-8 lg:w-1/3" key={e.id}>

                    <article className="overflow-hidden rounded-lg shadow-lg h-[fit-content]">

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="/">
                                <h1 className="text-lg text-blue-600 font-bold">
                                    {e.Name}
                                </h1>
                            </a>
                            <p className="text-grey-darker text-lg font-bold">
                                $ {e.Salary}
                            </p>
                        </header>

                        <footer className="flex flex-col items-center justify-between leading-none p-2 md:p-4">

                            <p className="ml-2 text-sm  my-12">
                                {e.Description.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={openModal}>
                                    Apply Now
                                </button>
                                <p className="text-blue-600">
                                    Months :  {e.Month}
                                </p>
                            </div>
                        </footer>
                    </article>
                </div>
                )

            } else { }
        })
        setText(detail1);

    }
    const price3 = () => {
        let detail1 = jobList.map((e) => {
            if (e.Salary <= "10000" && e.Salary >= "7000") {
                return (<div className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-8 lg:w-1/3" key={e.id}>

                    <article className="overflow-hidden rounded-lg shadow-lg h-[fit-content]">

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="/">
                                <h1 className="text-lg text-blue-600 font-bold">
                                    {e.Name}
                                </h1>
                            </a>
                            <p className="text-grey-darker text-lg font-bold">
                                $ {e.Salary}
                            </p>
                        </header>

                        <footer className="flex flex-col items-center justify-between leading-none p-2 md:p-4">

                            <p className="ml-2 text-sm  my-12">
                                {e.Description.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={openModal}>
                                    Apply Now
                                </button>
                                <p className="text-blue-600">
                                    Months :  {e.Month}
                                </p>
                            </div>
                        </footer>
                    </article>
                </div>
                )

            } else { }
        })
        setText(detail1);

    }

    const none = () => {
        let detail1 = jobList.map((e) => {

            return (<div className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-8 lg:w-1/3" key={e.id}>

                <article className="overflow-hidden rounded-lg shadow-lg h-[fit-content]">

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black" href="/">
                            <h1 className="text-lg text-blue-600 font-bold">
                                {e.Name}
                            </h1>
                        </a>
                        <p className="text-grey-darker text-lg font-bold">
                            $ {e.Salary}
                        </p>
                    </header>

                    <footer className="flex flex-col items-center justify-between leading-none p-2 md:p-4">

                        <p className="ml-2 text-sm  my-12">
                            {e.Description.slice(0, 200)}
                        </p>
                        <div className="flex items-center justify-between w-[100%] my-8">
                            <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={openModal}>
                                Apply Now
                            </button>
                            <p className="text-blue-600">
                                Months :  {e.Month}
                            </p>
                        </div>
                    </footer>
                </article>
            </div>
            )
        })
        setText(detail1);

    }

    const month1 = () => {
        let detail1 = jobList.map((e) => {
            if (e.Month <= "1") {
                return (<div className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-8 lg:w-1/3" key={e.id}>

                    <article className="overflow-hidden rounded-lg shadow-lg h-[fit-content]">

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="/">
                                <h1 className="text-lg text-blue-600 font-bold">
                                    {e.Name}
                                </h1>
                            </a>
                            <p className="text-grey-darker text-lg font-bold">
                                $ {e.Salary}
                            </p>
                        </header>

                        <footer className="flex flex-col items-center justify-between leading-none p-2 md:p-4">

                            <p className="ml-2 text-sm  my-12">
                                {e.Description.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={openModal}>
                                    Apply Now
                                </button>
                                <p className="text-blue-600">
                                    Months :  {e.Month}
                                </p>
                            </div>
                        </footer>
                    </article>
                </div>
                )

            } else { }
        })
        setText(detail1);

    }
    const month2 = () => {
        let detail1 = jobList.map((e) => {
            if (e.Month <= "3" && e.Month >= "2") {
                return (<div className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-8 lg:w-1/3" key={e.id}>

                    <article className="overflow-hidden rounded-lg shadow-lg h-[fit-content]">

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="/">
                                <h1 className="text-lg text-blue-600 font-bold">
                                    {e.Name}
                                </h1>
                            </a>
                            <p className="text-grey-darker text-lg font-bold">
                                $ {e.Salary}
                            </p>
                        </header>

                        <footer className="flex flex-col items-center justify-between leading-none p-2 md:p-4">

                            <p className="ml-2 text-sm  my-12">
                                {e.Description.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={openModal}>
                                    Apply Now
                                </button>
                                <p className="text-blue-600">
                                    Months :  {e.Month}
                                </p>
                            </div>
                        </footer>
                    </article>
                </div>
                )

            } else { }
        })
        setText(detail1);

    }
    const month3 = () => {
        let detail1 = jobList.map((e) => {
            if (e.Month <= "5" && e.Month >= "4") {
                return (<div className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-8 lg:w-1/3" key={e.id}>

                    <article className="overflow-hidden rounded-lg shadow-lg h-[fit-content]">

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="/">
                                <h1 className="text-lg text-blue-600 font-bold">
                                    {e.Name}
                                </h1>
                            </a>
                            <p className="text-grey-darker text-lg font-bold">
                                $ {e.Salary}
                            </p>
                        </header>

                        <footer className="flex flex-col items-center justify-between leading-none p-2 md:p-4">

                            <p className="ml-2 text-sm  my-12">
                                {e.Description.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"  onClick={openModal}>
                                    Apply Now
                                </button>
                                <p className="text-blue-600">
                                    Months :  {e.Month}
                                </p>
                            </div>
                        </footer>
                    </article>
                </div>
                )

            } else {}
        })
        setText(detail1);

    }

    const [searchText, setSearchText] = useState("")
    const addText = ((event) => {
        setSearchText(event.target.value)
    }
    )

    useEffect(() => {
        const details = jobList.filter((value) => {
            if (searchText === "") {
                return value;

            } else if (value.Name.toLowerCase().includes(searchText.toLowerCase())) {

                return value;
            }
        }).map((e) => {

            return (
                <div className="my-1 px-4 w-full md:w-1/2 lg:my-4 lg:px-8 lg:w-1/3" key={e.id}>

                    <article className="overflow-hidden rounded-lg shadow-lg h-[fit-content]">

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="/">
                                <h1 className="text-lg text-blue-600 font-bold">
                                    {e.Name}
                                </h1>
                            </a>
                            <p className="text-grey-darker text-lg font-bold">
                                $ {e.Salary}
                            </p>
                        </header>

                        <footer className="flex flex-col items-center justify-between leading-none p-2 md:p-4">

                            <p className="ml-2 text-sm  my-12">
                                {e.Description.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"  onClick={openModal}>
                                    Apply Now
                                </button>
                                <p className="text-blue-600">
                                    Months :  {e.Month}
                                </p>
                            </div>
                        </footer>
                    </article>
                </div>
            )
        })

        setText(details)

    }, [searchText])





    return (
        <div>
            <div className="flex flex-col md:flex-row mx-auto w-[80vw] items-center justify-between">
                <button onClick={none} type="button" className="my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 md:px-1.5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[100px]">No Filter</button>
                <div className="block my-4 md:my-12">
                    <button className="w-[169px] text-sky-600 bg-gray-200 focus:bg-blue-800 focus:ring-2 focus:text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">Sort by Price <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                    <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 w-[169px]" id="dropdown">

                        <ul className="py-1 cursor-pointer" aria-labelledby="dropdown">
                            <li>
                                <a href="/" onClick={price1} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">1000 - 3000</a>
                            </li>
                            <li>
                                <a href="/" onClick={price2} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">4000 - 6000</a>
                            </li>
                            <li>
                                <a href="/" onClick={price3} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">7000 - 10000</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="block my-4 md:my-12">
                    <button className="w-[169px] text-sky-600 bg-gray-200 hover:bg-blue-800 focus:ring-2 hover:text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown2">Sort by Month/s <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                    <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 w-[169px]" id="dropdown2">

                        <ul className="py-1  cursor-pointer" aria-labelledby="dropdown">
                            <li>
                                <a href="/" onClick={month1} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">0 - 1 Month</a>
                            </li>
                            <li>
                                <a href="/" onClick={month2} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">2 - 3 Months</a>
                            </li>
                            <li>
                                <a href="/" onClick={month3} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">4 - 5 Months</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="input-group my-4 md:my-12 ">
                    <input type="search" onChange={addText} id="myInput" className="form-control  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                </div>
            </div>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {Text}
                </div>
            </div>
            {
            jobList.map((e) => {
            return (
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"  key={e.id} style= {display}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                
                                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">{e.Name}</h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">{e.Description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Proceed</button>
                            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            )
           })
        }
        </div>
    )
}

export default Home;
