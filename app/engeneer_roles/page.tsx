'use client';

import { useCurrentUser } from "@/features/auth/api/use-current-user";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface EngineeringRole {
    title: string;
    mainskill: string;
}

const MyNextFastAPIApp = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title') || '';
    const [data, setData] = useState<EngineeringRole | null>(null);
    const [loading, setLoading] = useState(() => !!title);
    const { data: user, isLoading } = useCurrentUser();

    useEffect(() => {
        fetch(`/api/engineering_roles?title=${encodeURIComponent(title)}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            {user ? (
                <span>Привет, {user.first_name}!</span>
            ) : (
                <span>Гость</span>
            )}
            <h1>Data from API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default MyNextFastAPIApp;