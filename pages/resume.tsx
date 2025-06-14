import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { CMS } from '@/lib/constants';

export default function Resume() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the resume download link
    window.location.href = CMS.resumeContent.downloadLink;
  }, []);

  return (
    <>
      <Head>
        <title>Resume | Stebin Co</title>
        <meta name="description" content="Resume of Stebin Sebastine - UI/UX Designer" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-neutral-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Redirecting to resume...</h1>
          <p className="text-slate-600 dark:text-slate-400">
            If you are not redirected automatically, please{' '}
            <a
              href={CMS.resumeContent.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              click here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
