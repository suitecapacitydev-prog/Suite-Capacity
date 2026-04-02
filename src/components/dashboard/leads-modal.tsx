'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Calendar, Loader2, User, Search, Download } from 'lucide-react';
import { getLeads } from '@/app/actions/leads-actions';

interface LeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  created_at: string;
}

export default function LeadsModal({ isOpen, onClose }: LeadsModalProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  const fetchLeads = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getLeads();
      if (result.success && result.leads) {
        setLeads(result.leads as Lead[]);
      } else {
        setError(result.error || 'Failed to fetch leads');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredLeads = leads.filter(lead => 
    lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="p-8 border-b border-black/5 flex items-center justify-between bg-white sticky top-0 z-20">
              <div>
                <h2 className="text-3xl font-black text-primary">Guest Leads</h2>
                <p className="text-black/50 font-medium text-sm mt-1">
                  Manage and export leads captured through your ecosystem.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-primary/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-black/40" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 pt-4">
              {/* Toolbar */}
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/20" />
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-primary/5 border-none rounded-2xl py-4 pl-12 pr-4 text-black focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-black text-white font-bold hover:bg-black/90 transition-all active:scale-95">
                  <Download className="w-5 h-5" />
                  Export CSV
                </button>
              </div>

              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                  <p className="font-bold text-black/40 uppercase tracking-widest text-xs">Fetching Leads...</p>
                </div>
              ) : error ? (
                <div className="bg-red-50 text-red-600 p-6 rounded-2xl text-center font-bold">
                  {error}
                </div>
              ) : filteredLeads.length === 0 ? (
                <div className="text-center py-20 bg-primary/5 rounded-3xl">
                  <User className="w-16 h-16 text-black/10 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-black/40">No Leads Found</h3>
                  <p className="text-black/30 mt-2">Try adjusting your search or check back later.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-separate border-spacing-y-3">
                    <thead>
                      <tr className="text-left text-xs font-black uppercase tracking-widest text-black/30">
                        <th className="px-6 py-2">Guest Profile</th>
                        <th className="px-6 py-2">Contact Details</th>
                        <th className="px-6 py-2">Joined Date</th>
                        <th className="px-6 py-2 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="group">
                          <td className="px-6 py-4 bg-primary/5 rounded-l-2xl group-hover:bg-white transition-all">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-lg">
                                {lead.name?.charAt(0).toUpperCase()}
                              </div>
                              <span className="font-bold text-lg">{lead.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 bg-primary/5 group-hover:bg-white transition-all">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm text-black/60 font-medium">
                                <Mail className="w-4 h-4 text-primary/40" />
                                {lead.email}
                              </div>
                              {lead.phone && (
                                <div className="flex items-center gap-2 text-sm text-black/60 font-medium">
                                  <Phone className="w-4 h-4 text-primary/40" />
                                  {lead.phone}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 bg-primary/5 group-hover:bg-white transition-all">
                            <div className="flex items-center gap-2 text-sm text-black/60 font-bold">
                              <Calendar className="w-4 h-4 text-primary/40" />
                              {formatDate(lead.created_at)}
                            </div>
                          </td>
                          <td className="px-6 py-4 bg-primary/5 rounded-r-2xl group-hover:bg-white transition-all text-right">
                            <button className="text-primary font-bold text-sm hover:underline">View Journey</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
