import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import {
  getProjectDetail,
  getProjectNeighbors,
  projectDetails,
  type ProjectDetail,
} from "@/data/project-details";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projectDetails.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Khanh Huyen Portfolio`,
    description: project.description.join(" "),
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}

function ProjectDetailPage({ project }: { project: ProjectDetail }) {
  const { previous, next } = getProjectNeighbors(project.slug);

  return (
    <main className="work-detail-page min-h-screen">
      <div className="work-detail-shell">
        <Link className="work-detail-back" href="/#work">
          <ArrowLeft aria-hidden="true" size={15} strokeWidth={2.5} />
          Back
        </Link>

        <section className="work-detail-hero">
          <div className="work-detail-copy">
            <p className="work-detail-category">{project.category}</p>
            <h1>{project.title}</h1>
            <div className="work-detail-description">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              className="work-detail-social"
              href={project.social.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {project.social.label}
              <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2.5} />
            </a>
          </div>

          <div className="work-detail-visual">
            <Image
              alt={`${project.title} restaurant campaign thumbnail`}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 92vw"
              src={project.thumbnail}
            />
            <div className="work-detail-logo-badge">
              <Image
                alt={`${project.title} logo`}
                className="object-contain"
                fill
                sizes="140px"
                src={project.logo}
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="project-metrics" className="work-detail-section">
          <div className="work-detail-section-heading">
            <p>Proof points</p>
            <h2 id="project-metrics">Growth receipts</h2>
          </div>

          <div className="work-detail-metrics">
            {project.metrics.map((metric, index) => (
              <article className="work-detail-metric" key={metric.label}>
                <div className="work-detail-metric-kicker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>Metric</span>
                </div>
                <strong>{metric.value}</strong>
                <div aria-hidden="true" className="work-detail-metric-rule" />
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </section>

        {project.gallery?.length ? (
          <section
            aria-labelledby="project-gallery"
            className="work-detail-section"
          >
            <div className="work-detail-gallery-heading">
              <p>Campaign moments</p>
              <h2 id="project-gallery">Launch visuals in the wild</h2>
            </div>

            <div className="work-detail-gallery-grid">
              {project.gallery.map((image, index) => (
                <figure className="work-detail-gallery-card" key={image.src}>
                  <Image
                    alt={image.alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    src={image.src}
                  />
                  <figcaption
                    className={
                      image.caption ? "work-detail-gallery-caption" : undefined
                    }
                  >
                    {image.caption ?? String(index + 1).padStart(2, "0")}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section aria-labelledby="project-videos" className="work-detail-section">
          <div className="work-detail-video-heading">
            <div>
              <p>Video edits</p>
              <h2 id="project-videos">{project.videoHeading}</h2>
            </div>
            <p>{project.videoIntro}</p>
          </div>

          <div className="work-detail-video-grid">
            {project.videos.map((video, index) => (
              <a
                className="work-detail-video-card"
                href={video.href}
                key={video.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt={`${project.title} ${video.title} ${video.platform} thumbnail`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 92vw"
                  src={video.thumbnail}
                />
                <span className="work-detail-video-platform">{video.platform}</span>
                <span className="work-detail-video-play">
                  <Play aria-hidden="true" fill="currentColor" size={20} />
                </span>
                <span className="work-detail-video-cta">
                  <span>{video.title}</span>
                  <span>
                    Watch video
                    <ArrowUpRight aria-hidden="true" size={13} strokeWidth={2.6} />
                  </span>
                </span>
                <span aria-hidden="true" className="work-detail-video-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </div>
        </section>

        <footer className="work-detail-footer">
          {previous ? (
            <Link
              className="work-detail-footer-previous"
              href={`/work/${previous.slug}`}
            >
              <ArrowLeft aria-hidden="true" size={18} strokeWidth={2.5} />
              <span>
                {previous.title}
                <small>Previous project</small>
              </span>
            </Link>
          ) : (
            <Link className="work-detail-footer-menu" href="/#work">
              <ArrowLeft aria-hidden="true" size={18} strokeWidth={2.5} />
              <span>
                Growth Bar Menu
                <small>Back to work</small>
              </span>
            </Link>
          )}
          <p>More in {project.category}</p>
          {next ? (
            <Link
              className="work-detail-footer-next-link"
              href={`/work/${next.slug}`}
            >
              <span>
                {next.title}
                <small>Next project</small>
              </span>
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2.5} />
            </Link>
          ) : (
            <span className="work-detail-footer-next">
              <span>
                More recipes soon
                <small>Next project</small>
              </span>
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2.5} />
            </span>
          )}
        </footer>
      </div>
    </main>
  );
}
