import Link from 'next/link';
import { Heading, Text } from '@/components/ui/ui';
import { Button } from '@/components/ui/DemoComponents';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-6">
                <div className="text-9xl font-bold text-accent">404</div>
                <Heading level={1} className="text-4xl">
                    Página no encontrada
                </Heading>
                <Text size="lg" className="text-foreground-muted max-w-md mx-auto">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </Text>
                <div className="space-y-4">
                    <Link href="/">
                        <Button size="lg" className="bg-accent hover:bg-accent-hover text-background">
                            Volver al inicio
                        </Button>
                    </Link>
                    <div>
                        <Text className="text-sm text-foreground-muted">
                            ¿Necesitas ayuda? Contacta con nuestro soporte
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
