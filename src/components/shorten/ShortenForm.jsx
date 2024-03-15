'use client';
import { useState } from 'react';

const ShortenForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const ifErrorBorderRed = errorMessage ? 'border-2 border-red-500' : '';
  const ifSuccessBorderGreen =
    !errorMessage && inputValue ? 'border-shortly-cyan' : '';

  const isValidUrl = (url) => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!urlPattern.test(url);
  };

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
                 bg-shortly-darkViolet rounded-lg md:flex-row md:space-y-0 
                 md:space-x-3 ${ifErrorBorderRed} ${ifSuccessBorderGreen}`}
      onSubmit={handleSubmit}
    >
      <input
        // Input type='url' will validate that only a url is entered
        type='text'
        id='link-input'
        placeholder='Shorten a link here...'
        className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 
                    focus:outline-none focus:border-shortly-cyan'
        onChange={handleInputChange}
      />
      <button
        type='submit'
        className='px-10 py-3 text-white bg-shortly-cyan rounded-lg 
                 hover:bg-shortly-cyanLight focus:outline-none md:py-2'
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
