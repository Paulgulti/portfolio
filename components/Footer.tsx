import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="py-8 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Developer. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="https://github.com/paulgulti"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-[#ff6900] transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://linkedin.com/paulgulti"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-[#ff6900] transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://twitter.com/paulma00s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-[#ff6900] transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
