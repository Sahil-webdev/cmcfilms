import React, { useState } from 'react';
import { Inquiry } from '../data/mockData';
import {
  Search,
  MapPin,
  Calendar,
  Mail,
  Phone,
  X,
  CheckCircle,
  Download,
  Filter,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  CheckSquare,
  Square,
} from 'lucide-react';

interface InquiriesPageProps {
  inquiries: Inquiry[];
  onUpdateStatus: (id: string, status: Inquiry['status']) => void;
  onSaveInquiry: (inquiry: Partial<Inquiry>) => void;
  selectedInquiry: Inquiry | null;
  setSelectedInquiry: (inquiry: Inquiry | null) => void;
}

export const InquiriesPage: React.FC<InquiriesPageProps> = ({
  inquiries,
  onUpdateStatus,
  onSaveInquiry,
  selectedInquiry,
  setSelectedInquiry,
}) => {
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [notesInput, setNotesInput] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const statuses = ['All', 'New', 'Contacted', 'Proposal Sent', 'Confirmed', 'Archived'];

  const filteredInquiries = inquiries.filter((item) => {
    const matchesFilter = filter === 'All' || item.status === filter;
    const matchesSearch =
      item.coupleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.venueLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredInquiries.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredInquiries.map((i) => i.id));
    }
  };

  const toggleSelectRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header & Filter Controls Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[#121520] border border-[#202434] p-4 rounded-2xl shadow-xl">
        {/* Status Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filter === st
                  ? 'bg-[#C47A65] text-white shadow-md shadow-[#C47A65]/20'
                  : 'text-slate-400 hover:text-white hover:bg-[#1A1E2C]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search couple, venue, email..."
            className="w-full bg-[#1A1E2C] text-xs text-white pl-9 pr-4 py-2 rounded-xl border border-[#2B3147] focus:outline-none focus:border-[#C47A65]"
          />
        </div>
      </div>

      {/* Bulk Action Bar (when rows are selected) */}
      {selectedIds.length > 0 && (
        <div className="p-3.5 rounded-2xl bg-[#171B29] border border-[#C47A65]/40 flex items-center justify-between text-xs font-semibold text-white animate-in fade-in duration-150 shadow-lg">
          <span className="flex items-center gap-2">
            <CheckSquare className="h-4 w-4 text-[#C47A65]" />
            {selectedIds.length} inquiries selected
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                selectedIds.forEach((id) => onUpdateStatus(id, 'Confirmed'));
                setSelectedIds([]);
              }}
              className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
            >
              Mark Confirmed
            </button>
            <button
              onClick={() => setSelectedIds([])}
              className="px-3 py-1.5 rounded-xl bg-[#1A1E2C] text-slate-400 hover:text-white"
            >
              Deselect All
            </button>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="bg-[#121520] border border-[#202434] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#161924] border-b border-[#202434] text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="py-4 px-4 w-10">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === filteredInquiries.length && filteredInquiries.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded bg-[#1A1E2C] border-[#2B3147] text-[#C47A65] focus:ring-0 cursor-pointer"
                  />
                </th>
                <th className="py-4 px-5">ID & Couple</th>
                <th className="py-4 px-5">Wedding Date & Venue</th>
                <th className="py-4 px-5">Budget</th>
                <th className="py-4 px-5">Requested Services</th>
                <th className="py-4 px-5">Status</th>
                <th className="py-4 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E2333]">
              {filteredInquiries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500 text-xs">
                    No inquiries found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredInquiries.map((item) => {
                  const isSelected = selectedIds.includes(item.id);
                  return (
                    <tr
                      key={item.id}
                      className={`hover:bg-[#171B29] transition-colors group cursor-pointer ${
                        isSelected ? 'bg-[#171B29]/70' : ''
                      }`}
                      onClick={() => {
                        setSelectedInquiry(item);
                        setNotesInput(item.notes || '');
                      }}
                    >
                      <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelectRow(item.id)}
                          className="rounded bg-[#1A1E2C] border-[#2B3147] text-[#C47A65] focus:ring-0 cursor-pointer"
                        />
                      </td>

                      <td className="py-4 px-5">
                        <div className="space-y-0.5">
                          <span className="font-mono text-[10px] text-[#C47A65]">{item.id}</span>
                          <p className="font-semibold text-sm text-white group-hover:text-[#C47A65] transition-colors">
                            {item.coupleName}
                          </p>
                          <p className="text-[11px] text-slate-400">{item.phone}</p>
                        </div>
                      </td>

                      <td className="py-4 px-5 space-y-1">
                        <div className="flex items-center gap-1.5 text-slate-200">
                          <Calendar className="h-3.5 w-3.5 text-[#C47A65]" />
                          <span className="font-medium">{item.weddingDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <MapPin className="h-3.5 w-3.5 text-slate-500" />
                          <span>{item.venueLocation}</span>
                        </div>
                      </td>

                      <td className="py-4 px-5 font-mono text-white font-semibold">
                        {item.estimatedBudget}
                      </td>

                      <td className="py-4 px-5">
                        <div className="flex flex-wrap gap-1">
                          {item.servicesRequested.map((srv, idx) => (
                            <span
                              key={idx}
                              className="bg-[#1A1E2C] text-slate-300 border border-[#2B3147] text-[10px] px-2 py-0.5 rounded-md"
                            >
                              {srv}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="py-4 px-5">
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full border inline-block ${
                            item.status === 'New'
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                              : item.status === 'Confirmed'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : item.status === 'Contacted'
                              ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                              : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="py-4 px-5 text-right" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => {
                            setSelectedInquiry(item);
                            setNotesInput(item.notes || '');
                          }}
                          className="px-3 py-1.5 rounded-xl bg-[#1A1E2C] hover:bg-[#C47A65] text-slate-300 hover:text-white transition-colors text-xs font-semibold"
                        >
                          Details →
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 bg-[#161924] border-t border-[#202434] flex items-center justify-between text-xs text-slate-400">
          <span>
            Showing <strong className="text-white">{filteredInquiries.length}</strong> of{' '}
            <strong className="text-white">{inquiries.length}</strong> total inquiries
          </span>

          <div className="flex items-center gap-2">
            <button disabled className="p-1.5 rounded-lg bg-[#1A1E2C] text-slate-600 opacity-50">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-mono text-xs text-slate-300 px-2">Page 1 of 1</span>
            <button disabled className="p-1.5 rounded-lg bg-[#1A1E2C] text-slate-600 opacity-50">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Detail Slide-Over / Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121520] border border-[#23293D] rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedInquiry(null)}
              className="absolute right-5 top-5 p-1.5 rounded-xl bg-[#1A1E2C] text-slate-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <span className="font-mono text-xs text-[#C47A65]">{selectedInquiry.id}</span>
              <h3 className="font-editorial text-2xl text-white font-semibold">
                {selectedInquiry.coupleName}
              </h3>
              <p className="text-xs text-slate-400">Received on: {selectedInquiry.createdAt}</p>
            </div>

            {/* Quick Status Update */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Update Booking Status</label>
              <div className="grid grid-cols-3 gap-2">
                {(['New', 'Contacted', 'Proposal Sent', 'Confirmed', 'Archived'] as const).map(
                  (st) => (
                    <button
                      key={st}
                      onClick={() => onUpdateStatus(selectedInquiry.id, st)}
                      className={`p-2 rounded-xl text-xs font-semibold border transition-all ${
                        selectedInquiry.status === st
                          ? 'bg-[#C47A65] text-white border-[#C47A65]'
                          : 'bg-[#1A1E2C] text-slate-400 border-[#2B3147] hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Contact & Venue Info */}
            <div className="p-4 rounded-xl bg-[#171B29] border border-[#23293D] space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="h-4 w-4 text-[#C47A65]" />
                <span>{selectedInquiry.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="h-4 w-4 text-[#C47A65]" />
                <span>{selectedInquiry.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin className="h-4 w-4 text-[#C47A65]" />
                <span>{selectedInquiry.venueLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Calendar className="h-4 w-4 text-[#C47A65]" />
                <span>Wedding Date: {selectedInquiry.weddingDate}</span>
              </div>
            </div>

            {/* Admin Notes */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Studio Internal Notes</label>
              <textarea
                rows={3}
                value={notesInput}
                onChange={(e) => setNotesInput(e.target.value)}
                placeholder="Enter private notes (advance payment status, team requirements...)"
                className="w-full bg-[#1A1E2C] text-xs text-white p-3 rounded-xl border border-[#2B3147] focus:outline-none focus:border-[#C47A65]"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-4 py-2 rounded-xl bg-[#1A1E2C] text-slate-300 text-xs font-semibold hover:bg-[#23283B]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onSaveInquiry({ id: selectedInquiry.id, notes: notesInput });
                  setSelectedInquiry(null);
                }}
                className="px-5 py-2 rounded-xl bg-[#C47A65] text-white text-xs font-semibold hover:bg-[#B36854]"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
