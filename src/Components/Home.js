import React from 'react';
import jobList from './joblist.json';
import { useState, useEffect } from 'react';

function Home({openModal}) {

   
    
    
        
    
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
                                {e.Discription.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => openModal(e.Name, e.Discription,)}>
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
                                {e.Discription.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => openModal(e.Name, e.Discription)}>
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
                                {e.Discription.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => openModal(e.Name, e.Discription)}>
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
                                {e.Discription.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => openModal(e.Name, e.Discription)}>
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
                            {e.Discription.slice(0, 200)}
                        </p>
                        <div className="flex items-center justify-between w-[100%] my-8">
                            <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => openModal(e.Name, e.Discription)}>
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
                                {e.Discription.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => openModal(e.Name, e.Discription)}>
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
                                {e.Discription.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => openModal(e.Name, e.Discription)}>
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
                                {e.Discription.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"  onClick={() => openModal(e.Name, e.Discription)}>
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
                                {e.Discription.slice(0, 200)}
                            </p>
                            <div className="flex items-center justify-between w-[100%] my-8">
                                <button className=" bg-sky-500 hover:bg-sky-700 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"  onClick={() => openModal(e.Name, e.Discription)}>
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
                                <a onClick={price1} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">1000 - 3000</a>
                            </li>
                            <li>
                                <a onClick={price2} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">4000 - 6000</a>
                            </li>
                            <li>
                                <a onClick={price3} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">7000 - 10000</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="block my-4 md:my-12">
                    <button className="w-[169px] text-sky-600 bg-gray-200 hover:bg-blue-800 focus:ring-2 hover:text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown2">Sort by Month/s <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                    <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 w-[169px]" id="dropdown2">

                        <ul className="py-1  cursor-pointer" aria-labelledby="dropdown">
                            <li>
                                <a onClick={month1} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">0 - 1 Month</a>
                            </li>
                            <li>
                                <a onClick={month2} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">2 - 3 Months</a>
                            </li>
                            <li>
                                <a onClick={month3} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 text-center">4 - 5 Months</a>
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
            
        </div>
    )
}

export default Home;
