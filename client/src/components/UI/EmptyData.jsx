import React from 'react';
import { ReactComponent as SpotSerach } from '../../assets/images/spotSearch.svg';

function EmptyData() {
  return (
    <div className="border rounded-sm bg-gray-50 my-6 h-96 flex items-center justify-center">
      <div>
        <SpotSerach />
        <p className="mt-4 text-sm text-gray-400">No matched your search.</p>
      </div>
    </div>
  );
}

export default EmptyData;
