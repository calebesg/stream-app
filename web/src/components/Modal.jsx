import ReactDOM from 'react-dom';
import history from '../history';

const Modal = function () {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className="fixed top-0 w-full h-screen bg-slate-500 opacity-80 flex items-center justify-center"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="max-w-xl w-full bg-white p-4 rounded-md"
      >
        <header>
          <h2 className="font-bold text-lg">Delete Stream</h2>
        </header>
        <div className="mt-4">Are you sure you want to delete this stream?</div>
        <footer className="flex justify-end gap-2 mt-4">
          <button className="px-4 py-2 rounded-md text-gray-600 bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md text-white bg-red-500">
            Delete
          </button>
        </footer>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
