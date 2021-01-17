import React from 'react';
import ReactTimeAgo from 'react-time-ago';

import Layout from '../components/layout';

import useSWR from 'swr';

export default function Home() {
  const { data: activities, error } = useSWR('/api/activities');

  return (
    <Layout title="">
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <section className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 sm:px-6 py-5">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Recent activities</h2>
          </div>
          <dl className="px-4 sm:px-6 py-1 border-t border-gray-200">
            {(activities || []).map(({ location, last }) => (
              <div className="bg-white py-5 sm:grid sm:grid-cols-3 sm:gap-4 -px-4 -sm:px-6" key={location}>
                <dt className="-text-sm font-medium text-gray-700 capitalize">{location}</dt>
                <dd className="text-gray-900 text-sm mt-1 sm:mt-0 sm:col-span-2">
                  <ReactTimeAgo date={new Date(last)} locale="en" />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </Layout>
  );
}
