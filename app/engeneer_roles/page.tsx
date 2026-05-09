'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface EngineeringRole {
    title: string;
    mainskill: string;
}

const MyNextFastAPIApp = () => {
    const searchParams = useSearchParams();
    //  ?title=developer
    const title = searchParams.get('title') || '';

    const [role, setRole] = useState<EngineeringRole | null>(null);
    const [loading, setLoading] = useState<boolean>(() => !!title);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (!title) {
            return;
        }

        async function loadData() {
            setError("");
            setLoading(true);
            try {
                const response = await fetch(`/api/engineering_roles?title=${encodeURIComponent(title)}`);
                if (response.ok) {
                    const data = await response.json();
                    setRole(data);
                } else {
                    const errorData = await response.json().catch(() => null);
                    const errorMessage = errorData?.detail || errorData?.error || errorData?.message || `Ошибка сервера: ${response.status}`;
                    setError(errorMessage);
                }
            } catch (error) {
                console.error("Error fetching:", error);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, [title]);

    if (loading) return <div>Загрузка...</div>;
    if (!role) return <div>{error || "Роль не найдена или не указан параметр title"}</div>;

    return (
        <div>{`Роль: ${role.title}, навык: ${role.mainskill}.`}</div>
    );
};

export default MyNextFastAPIApp;