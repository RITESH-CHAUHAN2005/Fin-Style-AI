
import { useState } from 'react';
import { 
  BarChart2, ChevronDown, 
  Filter, Download, PlusCircle,
  Clock, Users, MessageSquare
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from 'recharts';

// Sample data for the charts
const timeToCloseData = [
  { name: 'Steve', value: 4.3, color: '#818cf8' },
  { name: 'Lisa', value: 3.2, color: '#fb7185' },
  { name: 'Dave', value: 4.8, color: '#fbbf24' },
  { name: 'Carla', value: 5.1, color: '#4ade80' },
  { name: 'John', value: 4.0, color: '#60a5fa' },
];

const conversationsData = [
  { week: 'Week 1', open: 45, closed: 20, pending: 15 },
  { week: 'Week 2', open: 38, closed: 28, pending: 17 },
  { week: 'Week 3', open: 52, closed: 32, pending: 18 },
  { week: 'Week 4', open: 60, closed: 45, pending: 20 },
  { week: 'Week 5', open: 55, closed: 48, pending: 17 },
  { week: 'Week 6', open: 70, closed: 50, pending: 22 },
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="min-h-screen bg-fin-beige pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <header className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h1 className="text-3xl font-serif font-medium">Custom Reports</h1>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-fin-light-beige transition-colors">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-fin-light-beige transition-colors">
                  <Download size={16} />
                  <span>Export</span>
                </button>
                <button className="classic-button flex items-center gap-2">
                  <PlusCircle size={16} />
                  <span>Add filter</span>
                </button>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="flex overflow-x-auto pb-1">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-5 py-2 rounded-lg mr-2 whitespace-nowrap ${activeTab === 'overview' ? 'bg-white shadow-sm' : 'hover:bg-white/50'} transition-all`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('ai-agent')}
                className={`px-5 py-2 rounded-lg mr-2 whitespace-nowrap ${activeTab === 'ai-agent' ? 'bg-white shadow-sm' : 'hover:bg-white/50'} transition-all`}
              >
                <div className="flex items-center gap-2">
                  <span>AI Agent</span>
                  <div className="bg-fin-light-beige rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    74
                  </div>
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('my-reports')}
                className={`px-5 py-2 rounded-lg mr-2 whitespace-nowrap ${activeTab === 'my-reports' ? 'bg-white shadow-sm' : 'hover:bg-white/50'} transition-all`}
              >
                <div className="flex items-center gap-2">
                  <span>My reports</span>
                  <div className="bg-fin-light-beige rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    6
                  </div>
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('data-export')}
                className={`px-5 py-2 rounded-lg mr-2 whitespace-nowrap ${activeTab === 'data-export' ? 'bg-white shadow-sm' : 'hover:bg-white/50'} transition-all`}
              >
                Data export
              </button>
              <button 
                onClick={() => setActiveTab('favorites')}
                className={`px-5 py-2 rounded-lg mr-2 whitespace-nowrap ${activeTab === 'favorites' ? 'bg-white shadow-sm' : 'hover:bg-white/50'} transition-all`}
              >
                <div className="flex items-center gap-2">
                  <span>Favorites</span>
                  <div className="bg-fin-light-beige rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    2
                  </div>
                </div>
              </button>
            </div>
          </header>
          
          {/* Dashboard Content */}
          <div className="mb-10">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-medium">Overall Performance KPIs</h2>
                  <button className="text-fin-orange hover:underline text-sm flex items-center gap-1">
                    <PlusCircle size={14} />
                    <span>Add filter</span>
                  </button>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  Overview of global key performance data
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <div className="px-2 py-0.5 bg-fin-light-beige rounded-md">
                    Date: Feb 1 - Los Angeles time (GMT-8)
                  </div>
                </div>
              </div>

              {/* KPI Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                <div className="stat-card animate-fade-in" style={{animationDelay: "0.1s"}}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Median first response time</h3>
                      <div className="text-sm text-gray-500">
                        Feb 3 - Mar 3, 2024
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <Clock size={16} className="text-blue-500" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-medium">3m 6s</div>
                    <div className="text-sm text-green-500 flex items-center mt-1">
                      <span>↓ 15s</span>
                      <span className="text-gray-400 ml-2">from previous period</span>
                    </div>
                  </div>
                </div>

                <div className="stat-card animate-fade-in" style={{animationDelay: "0.2s"}}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Total conversations</h3>
                      <div className="text-sm text-gray-500">
                        Feb 3 - Mar 3, 2024
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                      <MessageSquare size={16} className="text-purple-500" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-medium">1,284</div>
                    <div className="text-sm text-green-500 flex items-center mt-1">
                      <span>↑ 8.5%</span>
                      <span className="text-gray-400 ml-2">from previous period</span>
                    </div>
                  </div>
                </div>

                <div className="stat-card animate-fade-in" style={{animationDelay: "0.3s"}}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Active customers</h3>
                      <div className="text-sm text-gray-500">
                        Feb 3 - Mar 3, 2024
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                      <Users size={16} className="text-green-500" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-3xl font-medium">756</div>
                    <div className="text-sm text-green-500 flex items-center mt-1">
                      <span>↑ 12.3%</span>
                      <span className="text-gray-400 ml-2">from previous period</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="p-6">
                <div className="mb-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
                  <h3 className="text-lg font-medium mb-3">Median time to close by teammates (first replied)</h3>
                  <div className="text-sm text-gray-500 mb-4">
                    Feb 3 - Mar 3, 2024
                  </div>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={timeToCloseData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                          unit="h"
                        />
                        <Tooltip 
                          cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                          contentStyle={{
                            borderRadius: 8,
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                          }}
                        />
                        <Bar 
                          dataKey="value" 
                          fill="#818cf8" 
                          radius={[4, 4, 0, 0]}
                          barSize={40}
                        />
                        <line 
                          x1="0%" 
                          y1="50%" 
                          x2="100%" 
                          y2="50%" 
                          stroke="#3b82f6" 
                          strokeWidth={1} 
                          strokeDasharray="3 3" 
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div className="animate-fade-in" style={{animationDelay: "0.5s"}}>
                  <h3 className="text-lg font-medium mb-3">New conversations by week and conversation state</h3>
                  <div className="text-sm text-gray-500 mb-4">
                    Feb 3 - Mar 3, 2024
                  </div>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={conversationsData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="week" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#6b7280' }}
                        />
                        <Tooltip 
                          cursor={{ strokeDasharray: '3 3' }}
                          contentStyle={{
                            borderRadius: 8,
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                          }}
                        />
                        <Legend 
                          verticalAlign="top" 
                          height={36}
                          iconType="circle"
                          iconSize={8}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="open" 
                          stroke="#4ade80" 
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="closed" 
                          stroke="#fb7185" 
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="pending" 
                          stroke="#fbbf24" 
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Report Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Customer satisfaction</h3>
                <button className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-fin-light-beige transition-colors">
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                Measure how happy your customers are with the service
              </p>
              <button className="text-fin-orange hover:underline text-sm">
                View report
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">AI resolution rate</h3>
                <button className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-fin-light-beige transition-colors">
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                Track how many conversations Fin resolves without human intervention
              </p>
              <button className="text-fin-orange hover:underline text-sm">
                View report
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Conversation volume</h3>
                <button className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-fin-light-beige transition-colors">
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                Analyze conversation patterns across channels over time
              </p>
              <button className="text-fin-orange hover:underline text-sm">
                View report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
