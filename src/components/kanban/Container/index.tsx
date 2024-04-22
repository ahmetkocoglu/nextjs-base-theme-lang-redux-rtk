import React from 'react';
import ContainerProps from './container.type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Button } from '../Button';

const Container = ({
  id,
  children,
  title,
  description,
  onAddItem,
                     onExportHtml,
                     onExportReact
}: ContainerProps) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'container',
    },
  });
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'w-full h-full p-4 bg-gray-50 dark:bg-gray-800 rounded-xl flex flex-col gap-y-4',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 text-xl dark:text-gray-50">{title}</h1>
          <p className="text-gray-400 text-sm dark:text-gray-50">{description}</p>
        </div>
        {/*<button
          className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
          {...listeners}
        >
          Drag Handle
        </button>*/}
      </div>

      {children}
      <div className="flex justify-evenly">
      <Button variant="ghost" onClick={onAddItem} className="dark:hover:text-black text-black dark:text-white">
        Add Item
      </Button>
        <Button variant="ghost" onClick={onExportHtml} className="dark:hover:text-black text-black dark:text-white">
          Export Html
        </Button>
        <Button variant="ghost" onClick={onExportReact} className="dark:hover:text-black text-black dark:text-white">
          Export React
        </Button>
      </div>
    </div>
  );
};

export default Container;
