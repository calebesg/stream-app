import ReactDOM from 'react-dom';

const Modal = function ({ title, content, actions, onDismiss }) {
  return ReactDOM.createPortal(
    <div
      onClick={onDismiss}
      className="fixed top-0 w-full h-screen bg-gray-800 opacity-90 flex items-center justify-center"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="max-w-xl w-full bg-white p-4 rounded-md"
      >
        <header>
          <h2 className="font-bold text-lg">{title}</h2>
        </header>
        <div className="mt-4">{content}</div>
        <footer className="flex justify-end gap-2 mt-4">{actions}</footer>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
