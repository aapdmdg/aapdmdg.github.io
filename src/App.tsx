import { useState, useEffect, useCallback } from 'react';
import Project01 from './assets/images/project-01.png';
import Project02 from './assets/images/project-02.png';
import Project03 from './assets/images/project-03.png';
import Project04 from './assets/images/project-04.png';
import Project05 from './assets/images/project-05.png';
import Project06 from './assets/images/project-06.png';
import Project07 from './assets/images/project-07.jpeg';
import Project08 from './assets/images/project-08.jpeg';
import Project09 from './assets/images/project-09.jpeg';
import Project10 from './assets/images/project-10.jpeg';
import Project11 from './assets/images/project-11.jpeg';
import Project12 from './assets/images/project-12.jpeg';
import Project13 from './assets/images/project-13.jpeg';
import Project14 from './assets/images/project-14.jpeg';
import Project15 from './assets/images/project-15.jpeg';
import Project16 from './assets/images/project-16.jpeg';
import Project17 from './assets/images/project-17.jpeg';
import Project18 from './assets/images/project-18.jpeg';
import Project19 from './assets/images/project-19.jpeg';
import Project20 from './assets/images/project-20.jpeg';
import Project21 from './assets/images/project-21.jpeg';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const projects = [
    Project01,
    Project02,
    Project03,
    Project04,
    Project05,
    Project06,
    Project07,
    Project08,
    Project09,
    Project10,
    Project11,
    Project12,
    Project13,
    Project14,
    Project15,
    Project16,
    Project17,
    Project18,
    Project19,
    Project20,
    Project21,
  ] as const;

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const [showInfo, setShowInfo] = useState(false);

  const openImageViewer = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImageViewer = useCallback(() => {
    setSelectedImageIndex(null);
  }, [setSelectedImageIndex]);

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex > 0 ? selectedImageIndex - 1 : projects.length - 1,
      );
    }
  }, [selectedImageIndex, projects.length]);

  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex < projects.length - 1 ? selectedImageIndex + 1 : 0,
      );
    }
  }, [selectedImageIndex, projects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      switch (event.key) {
        case 'Escape':
          closeImageViewer();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, goToPrevious, goToNext, closeImageViewer]);

  return (
    <div className="max-w-[960px] m-auto py-14 px-4 lg:px-0">
      <a href="/">
        <h1 className="text-3xl w-max">
          ARCH ANTHONY <br /> DUMADAG
        </h1>
      </a>

      <nav className="flex justify-between font-[Roboto] font-light text-sm py-6">
        <button className="cursor-pointer" onClick={() => setShowInfo(false)}>
          ARCHITECTURE
        </button>
        <button className="cursor-pointer" onClick={() => setShowInfo(true)}>
          Info
        </button>
      </nav>

      {showInfo ? (
        <div className="py-14 font-[Roboto] font-light text-md flex flex-col gap-4 items-center justify-center h-[calc(100vh-196px-56px)] box-border">
          <a
            href="https://ph.linkedin.com/in/arch-anthony-dumadag-470601377"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin.com/in/arch-anthony-dumadag-470601377
          </a>
          <a
            href="mailto:aapdumadag@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            aapdumadag@gmail.com
          </a>

          <div className="mt-24">Philippines</div>
        </div>
      ) : (
        <div className="columns-2 gap-8 space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="break-inside-avoid mb-14">
              <img
                src={project}
                alt={`Project ${index + 1}`}
                className="w-full h-auto object-cover hover:opacity-95 transition-all duration-300 cursor-pointer"
                onClick={() => openImageViewer(index)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Image Viewer Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-[rgba(29,29,29,1)] image-viewer-overlay z-50 flex items-center justify-center"
          onClick={closeImageViewer}
        >
          {/* Close button */}
          <button
            onClick={closeImageViewer}
            className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 z-10 bg-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            <X className="w-5" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10 image-viewer-nav-button cursor-pointer"
          >
            <ChevronLeft className="mr-0.5" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 z-10 image-viewer-nav-button cursor-pointer"
          >
            <ChevronRight className="ml-0.5" />
          </button>

          {/* Image container */}
          <div className="flex items-center justify-center">
            <img
              src={projects[selectedImageIndex]}
              alt={`Project ${selectedImageIndex + 1}`}
              className="image-viewer-img w-[800px] max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black px-3 py-1 rounded">
            {selectedImageIndex + 1} / {projects.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
