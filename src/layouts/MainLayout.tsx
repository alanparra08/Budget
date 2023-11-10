import React from 'react'
import { SafeAreaView } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'

interface LayoutProps {
    title: string;
    children: any;
    returnPage?: string;
}

export const MainLayout = ({ title, children, returnPage='HomeScreen' }: LayoutProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TitleComponent title={title} returnPage={returnPage} />
            {children}
        </SafeAreaView>
    )
}