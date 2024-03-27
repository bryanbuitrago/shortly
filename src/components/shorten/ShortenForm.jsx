'use client';
import { useState } from 'react';
import {
  ifErrorBorderRed,
  ifSuccessBorderGreen,
  isValidUrl,
} from './shortenUtils';

const ShortenForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setErrorMessage('Please add a link');
      return;
    } else if (!isValidUrl(inputValue)) {
      setErrorMessage('Please add a valid link');
      return;
    } else {
      setErrorMessage('');
      alert('Sucessfully submitted');
      // Here you can also handle the successful case,
      // e.g., submitting the URL for shortening
    }
  };
  return (
    <form
      id='link-form'
      className={`relative flex flex-col w-full p-10 -top-16 space-y-4 
                 bg-darkViolet rounded-lg md:flex-row md:space-y-0 
                 md:space-x-3 ${ifErrorBorderRed} ${ifSuccessBorderGreen}`}
      onSubmit={handleSubmit}
    >
      <input
        // Input type='url' will validate that only a url is entered
        type='text'
        id='link-input'
        placeholder='Shorten a link here...'
        className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 
                    focus:outline-none focus:border-cyan'
        onChange={handleInputChange}
      />
      <button
        type='submit'
        className='px-10 py-3 text-white bg-cyan rounded-lg 
                 hover:bg-cyanLight focus:outline-none md:py-2'
      >
        Shorten It!
      </button>

      {/* Error Message  */}

      {errorMessage && (
        <div
          id='err-msg'
          className='absolute left-7 bottom-3 text-red-500 text-sm italic'
        >
          {errorMessage}
        </div>
      )}
    </form>
  );
};

export default ShortenForm;
