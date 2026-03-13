'use client';

import { useState } from 'react';
import { Batch } from '@/lib/api';
import BatchCard from '@/components/BatchCard';
import SearchBar from '@/components/SearchBar';

interface SearchBarWrapperProps {
  initialBatches: Batch[];
}

export default function SearchBarWrapper({ initialBatches }: SearchBarWrapperProps) {
  const [filteredBatches, setFilteredBatches] = useState<Batch[]>(initialBatches);

  const handleSearch = (query: string) => {
    const filtered = initialBatches.filter(b => 
      b.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBatches(filtered);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBatches.map((batch, index) => (
          <BatchCard key={batch.id} batch={batch} index={index} />
        ))}
      </div>

      {filteredBatches.length === 0 && (
        <div className="text-center py-20">
          <p className="text-zinc-500 text-lg">No batches found matching your search.</p>
        </div>
      )}
    </>
  );
}
