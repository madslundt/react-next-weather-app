import React, { useState, FormEvent } from "react";

const FormSearch = ({ submit, searchText }: IProps) => {
    const [term, setTerm] = useState("");

    const handleSubmit = (e: FormEvent) => {
        submit(term);
        setTerm("");

        e && e.preventDefault();
    };

    return (
        <form
            onSubmit={handleSubmit}
            method="GET"
            className="p-2 flex justify-between"
        >
            <input
                type="text"
                name="city"
                placeholder="City"
                className="border border-gray-200 rounded p-1 flex-grow"
                onChange={e => setTerm(e.currentTarget.value)}
                value={term}
                required
            />
            <button
                type="submit"
                className="hover:bg-gray-100 hover:border-gray-300 py-1 px-4 ml-1 border border-gray-200 rounded"
            >
                {searchText}
            </button>
        </form>
    );
};

interface IProps {
    submit: (term: string) => void;
    searchText?: string;
}

export default FormSearch;
